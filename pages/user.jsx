import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { storage } from "../firebase/firebase";
import MenuDataService from './services/food.services';
import AdminDataService from './services/admin.services';
import OrderDataService from './services/order.services';
import { useUserAuth1 } from "./context/UserAuthContext";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";


const Admin = () => {
    const [tip, setTip] = useState('Mic dejun')
    const [denumire, setDenumire] = useState('')
    const [descriere, setDescriere] = useState('')
    const [proteine, setProteine] = useState('')
    const [grasimi, setGrasimi] = useState('')
    const [carbohidrati, setCarbohidrati] = useState('')
    const [message, setMessage] = useState({ error: false, msg: '' })
    const [menuId, setMenuId] = useState('')
    const [file, setFile] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [date, setDate] = useState(null);
    const [menus, setMenus] = useState([])
    const [admins, setAdmins] = useState([])
    const [goOn, setGonOn] = useState(false)
    const [alignmentAdmin, setAlignment] = useState('Meniu Comenzi');
    const [alignmentUser, setAlignmentUser] = useState('Date Profil');
    const [orders, setOrders] = useState([])
    const [ordersDone, setOrdersDone] = useState([])
    const [userOrders, setUserOrders] = useState([])

    const router = useRouter();
    let { user, deleteUser1, logOut } = useUserAuth1();
    console.log(user);
    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file);


            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageURL(downloadURL)
                    });
                }
            );
        }

        file && uploadFile();
    }, [file])

    const getMenuIdHandler = (id) => {
        setMenuId(id);
    }

    useEffect(() => {

        if (menuId !== undefined && menuId !== "") {
            editHandler();
        }
    }, [menuId]);

    const editHandler = async () => {

        setMessage('');
        try {

            const docSnap = await MenuDataService.getMenu(menuId);


            setTip(docSnap.data().tip)
            setDenumire(docSnap.data().denumire)
            setDescriere(docSnap.data().descriere)
            setCalorii(docSnap.data().calorii)
        }
        catch (err) {
            setMessage({ error: true, msg: err.message })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (denumire === '' || descriere === '' || calorii === '') {
            setMessage({ error: true, msg: 'Toate campurile sunt obligatorii!' })
            return;
        }

        const calorii = (proteine * 4) + (grasimi * 9) + (carbohidrati * 4)

        const newMenu = {
            tip,
            denumire,
            descriere,
            proteine,
            grasimi,
            carbohidrati,
            calorii,
            date,
            imageURL
        }

        try {
            if (menuId !== undefined && menuId !== "") {
                await MenuDataService.updateMenu(menuId, newMenu)
                setMenuId('')
                setMessage({ error: false, msg: "Meniul nou a fost modificat!" })
            }
            else {
                await MenuDataService.addMenu(newMenu)
                setMessage({ error: false, msg: "Meniul nou a fost adaugat!" })
            }


        } catch (err) {

            setMessage({ error: true, msg: err.message })
        }

        setTip('Mic dejun')
        setDenumire('')
        setProteine('')
        setCarbohidrati('')
        setGrasimi('')
        setDescriere('')
    }

    const handleUpdateOrder = async (doc, id) => {





        const newOrder = {
            adresa: doc.adresa,
            cart: doc.cart,
            date: doc.date,
            livrat: true,
            ora: doc.ora,
            telefon: doc.telefon,
            tipAbonament: doc.tipAbonament,
            user: doc.user,

        }


        try {
            await OrderDataService.updateOrder(id, newOrder)

        } catch (err) {

            console.log(err);
        }
        console.log('done')

    }

    useEffect(() => {
    }, [goOn])
    useEffect(() => {
        getMenusAndAdminsAndOrders();
        getUserOrders()
        getOrdersDone()
    }, [])



    const getUserOrders = async () => {
        if (user) {

            const userOrders = await OrderDataService.getOrderForUser(user.email);
            setUserOrders(userOrders.docs.map((doc) => ({ ...doc.data() })))
        }
    }

    const getOrdersDone = async () => {


        const sentOrders = await OrderDataService.getOrderSent();
        setOrdersDone(sentOrders.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }

    const getMenusAndAdminsAndOrders = async () => {
        const data1 = await MenuDataService.getAllMenus();
        const data2 = await AdminDataService.getAllAdmins();
        const data3 = await OrderDataService.getAllOrders();

        setMenus(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setAdmins(data2.docs.map((doc) => ({ ...doc.data() })))
        setOrders(data3.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        setGonOn(true)

    }

    function checkIfAdmin() {
        if (goOn) {
            if (user) {
                if (admins[0].adminList.indexOf(user.email) > -1) {

                    return true;
                }
            }

            return false;
        }
        return false
    }


    const deleteHandler = async (id) => {
        try {
            await MenuDataService.deleteMenu(id)

        } catch (err) {
            console.log(err.message)

        }


    }

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);


    };

    const handleChangeUser = (event, newAlignment) => {
        setAlignmentUser(newAlignment);


    };

    function compare(a, b) {
        if (a.date < b.date) {
            return -1;
        }
        if (a.date > b.date) {
            return 1;
        }
        return 0;
    }

    function displayCart(cart) {


        const items = [];
        cart.sort(compare);
        cart.forEach(element => {
            items.push(element)
        });

        return items;
    }

    function transformDate(seconds) {
        let d = new Date(0);
        d.setUTCSeconds(seconds);

        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    }

    return (
        <>
            {checkIfAdmin() && <>
                <div className="flex flex-col p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow ">
                    <ToggleButtonGroup
                        color="primary"
                        value={alignmentAdmin}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value={'Meniu Comenzi'}>Meniu Comenzi</ToggleButton>
                        <ToggleButton value={'Vizualizeaza Comenzi Nelivrate'}>Vizualizeaza Comenzi Nelivrate</ToggleButton>
                        <ToggleButton value={'Vizualizeaza Comenzi Livrate'}>Vizualizeaza Comenzi Livrate</ToggleButton>


                    </ToggleButtonGroup>
                </div>
                {alignmentAdmin === 'Meniu Comenzi' &&
                    <div>
                        <div className="mt-10 sm:mt-0">

                            <div className="md:grid md:grid-cols-1 md:gap-1">

                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form action="#" method="POST">
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-1 gap-6">

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                            Tip
                                                        </label>
                                                        <select
                                                            onChange={(e) => setTip(e.target.value)}
                                                            value={tip}
                                                            id="country"
                                                            name="country"
                                                            autoComplete="country-name"
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            <option>Mic dejun</option>
                                                            <option>Pranz</option>
                                                            <option>Cina</option>
                                                            <option>Desert</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                            Denumire
                                                        </label>
                                                        <input
                                                            onChange={(e) => setDenumire(e.target.value)}
                                                            value={denumire}
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                            Descriere
                                                        </label>
                                                        <input
                                                            onChange={(e) => setDescriere(e.target.value)}
                                                            type="text"
                                                            value={descriere}
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                            Proteine
                                                        </label>
                                                        <input
                                                            onChange={(e) => setProteine(e.target.value)}
                                                            type="text"
                                                            value={proteine}
                                                            name="email-address"
                                                            id="email-address"
                                                            autoComplete="email"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                            Grasimi
                                                        </label>
                                                        <input
                                                            onChange={(e) => setGrasimi(e.target.value)}
                                                            type="text"
                                                            value={grasimi}
                                                            name="email-address"
                                                            id="email-address"
                                                            autoComplete="email"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                            Carbohidrati
                                                        </label>
                                                        <input
                                                            onChange={(e) => setCarbohidrati(e.target.value)}
                                                            type="text"
                                                            value={carbohidrati}
                                                            name="email-address"
                                                            id="email-address"
                                                            autoComplete="email"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                            Data
                                                        </label>
                                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                            <DatePicker

                                                                value={date}
                                                                onChange={(newValue) => {
                                                                    setDate(newValue);
                                                                }}
                                                                renderInput={(params) => <TextField {...params} />}
                                                            />
                                                        </LocalizationProvider>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Imagine</label>
                                                        <div className="space-y-1 text-center">
                                                            <div className="mx-auto h-12 w-12 text-gray-400"  >
                                                                <img
                                                                    src={
                                                                        file
                                                                            ? URL.createObjectURL(file)
                                                                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="flex text-sm text-gray-600">
                                                                <label htmlFor="file">
                                                                    Upload: <DriveFolderUploadOutlinedIcon className="icon" />
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    id="file"
                                                                    onChange={(e) => setFile(e.target.files[0])}
                                                                    style={{ display: "none" }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            {message?.msg && (<Alert variant={message?.error ? 'danger' : 'success'} dissmis onClose={() => setMessage('')} >{message?.msg}</Alert>)}
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button
                                                    onClick={handleSubmit}
                                                    type="submit"
                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Adauga/Modifica
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <>
                            <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                <Button variant='contained' onClick={getMenusAndAdminsAndOrders}>
                                    Refresh
                                </Button>
                            </div>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Denumire
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Tip
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Descriere
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Proteine
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Grasimi
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Carbohidrati
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Calorii
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Actiuni
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {menus.map((doc, index) => {

                                            return (
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                        {index + 1}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {doc.denumire}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {doc.tip}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {doc.descriere}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {doc.proteine}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {doc.grasimi}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {doc.carbohidrati}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {doc.calorii}
                                                    </td>
                                                    <td class="px-6 py-4 flex space-x-4 ">
                                                        <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { getMenuIdHandler(doc.id) }} >Editeaza</button>
                                                        <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { deleteHandler(doc.id) }}>Sterge</button>
                                                    </td>
                                                </tr>)
                                        })}



                                    </tbody>
                                </table>
                            </div>
                        </>
                    </div>}
                {alignmentAdmin === 'Vizualizeaza Comenzi Nelivrate' && <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Preparate
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Adresa
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Telefon
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data Livrare
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Actiuni
                                </th>



                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((doc, index) => {


                                if (displayCart(doc.cart).length === 4)
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                                {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {doc.adresa}
                                            </td>
                                            <td class="px-6 py-4">
                                                {doc.telefon}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(doc.cart)[0].idDate.seconds).toString()}
                                            </td>
                                            <td class="px-6 py-4 flex space-x-4 ">
                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { handleUpdateOrder(doc, doc.id) }} >Marcheaza ca livrat</button>

                                            </td>


                                        </tr>)

                                if (displayCart(doc.cart).length === 20)

                                    return (
                                        <>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[1].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[4].meniu}, ${displayCart(doc.cart)[5].meniu}, ${displayCart(doc.cart)[6].meniu}, ${displayCart(doc.cart)[7].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[4].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[8].meniu}, ${displayCart(doc.cart)[9].meniu}, ${displayCart(doc.cart)[10].meniu}, ${displayCart(doc.cart)[11].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[8].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[12].meniu}, ${displayCart(doc.cart)[13].meniu}, ${displayCart(doc.cart)[14].meniu}, ${displayCart(doc.cart)[15].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[12].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[16].meniu}, ${displayCart(doc.cart)[17].meniu}, ${displayCart(doc.cart)[18].meniu}, ${displayCart(doc.cart)[19].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[16].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                        </>
                                    )

                                if (displayCart(doc.cart).length === 100)
                                    return (
                                        <>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[0].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[4].meniu}, ${displayCart(doc.cart)[5].meniu}, ${displayCart(doc.cart)[6].meniu}, ${displayCart(doc.cart)[7].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[4].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[8].meniu}, ${displayCart(doc.cart)[9].meniu}, ${displayCart(doc.cart)[10].meniu}, ${displayCart(doc.cart)[11].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[8].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[12].meniu}, ${displayCart(doc.cart)[13].meniu}, ${displayCart(doc.cart)[14].meniu}, ${displayCart(doc.cart)[15].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[12].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[16].meniu}, ${displayCart(doc.cart)[17].meniu}, ${displayCart(doc.cart)[18].meniu}, ${displayCart(doc.cart)[19].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[16].idDate.seconds).toString()}
                                                </td>


                                            </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[20].meniu}, ${displayCart(doc.cart)[21].meniu}, ${displayCart(doc.cart)[22].meniu}, ${displayCart(doc.cart)[23].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[20].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[24].meniu}, ${displayCart(doc.cart)[25].meniu}, ${displayCart(doc.cart)[26].meniu}, ${displayCart(doc.cart)[27].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[24].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[28].meniu}, ${displayCart(doc.cart)[29].meniu}, ${displayCart(doc.cart)[30].meniu}, ${displayCart(doc.cart)[31].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[28].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[32].meniu}, ${displayCart(doc.cart)[33].meniu}, ${displayCart(doc.cart)[34].meniu}, ${displayCart(doc.cart)[35].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[32].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[36].meniu}, ${displayCart(doc.cart)[37].meniu}, ${displayCart(doc.cart)[38].meniu}, ${displayCart(doc.cart)[39].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[36].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                        </>)

                            })}



                        </tbody>
                    </table>
                </div>}

                {alignmentAdmin === 'Vizualizeaza Comenzi Livrate' && <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Preparate
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Adresa
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Telefon
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data Livrare
                                </th>



                            </tr>
                        </thead>
                        <tbody>
                            {ordersDone.map((doc, index) => {


                                if (displayCart(doc.cart).length === 4)
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                                {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {doc.adresa}
                                            </td>
                                            <td class="px-6 py-4">
                                                {doc.telefon}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(doc.cart)[0].idDate.seconds).toString()}
                                            </td>


                                        </tr>)

                                if (displayCart(doc.cart).length === 20)

                                    return (
                                        <>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[1].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[4].meniu}, ${displayCart(doc.cart)[5].meniu}, ${displayCart(doc.cart)[6].meniu}, ${displayCart(doc.cart)[7].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[4].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[8].meniu}, ${displayCart(doc.cart)[9].meniu}, ${displayCart(doc.cart)[10].meniu}, ${displayCart(doc.cart)[11].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[8].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[12].meniu}, ${displayCart(doc.cart)[13].meniu}, ${displayCart(doc.cart)[14].meniu}, ${displayCart(doc.cart)[15].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[12].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[16].meniu}, ${displayCart(doc.cart)[17].meniu}, ${displayCart(doc.cart)[18].meniu}, ${displayCart(doc.cart)[19].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[16].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                        </>
                                    )

                                if (displayCart(doc.cart).length === 100)
                                    return (
                                        <>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[0].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[4].meniu}, ${displayCart(doc.cart)[5].meniu}, ${displayCart(doc.cart)[6].meniu}, ${displayCart(doc.cart)[7].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[4].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[8].meniu}, ${displayCart(doc.cart)[9].meniu}, ${displayCart(doc.cart)[10].meniu}, ${displayCart(doc.cart)[11].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[8].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[12].meniu}, ${displayCart(doc.cart)[13].meniu}, ${displayCart(doc.cart)[14].meniu}, ${displayCart(doc.cart)[15].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[12].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[16].meniu}, ${displayCart(doc.cart)[17].meniu}, ${displayCart(doc.cart)[18].meniu}, ${displayCart(doc.cart)[19].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[16].idDate.seconds).toString()}
                                                </td>


                                            </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[20].meniu}, ${displayCart(doc.cart)[21].meniu}, ${displayCart(doc.cart)[22].meniu}, ${displayCart(doc.cart)[23].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[20].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[24].meniu}, ${displayCart(doc.cart)[25].meniu}, ${displayCart(doc.cart)[26].meniu}, ${displayCart(doc.cart)[27].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[24].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[28].meniu}, ${displayCart(doc.cart)[29].meniu}, ${displayCart(doc.cart)[30].meniu}, ${displayCart(doc.cart)[31].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[28].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[32].meniu}, ${displayCart(doc.cart)[33].meniu}, ${displayCart(doc.cart)[34].meniu}, ${displayCart(doc.cart)[35].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[32].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[36].meniu}, ${displayCart(doc.cart)[37].meniu}, ${displayCart(doc.cart)[38].meniu}, ${displayCart(doc.cart)[39].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[36].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                        </>)

                            })}



                        </tbody>
                    </table>
                </div>}


            </>}

            {!checkIfAdmin() && <>
                <div className="flex flex-col p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow ">
                    <ToggleButtonGroup
                        color="primary"
                        value={alignmentUser}
                        exclusive
                        onChange={handleChangeUser}
                    >
                        <ToggleButton value={'Date Profil'}>Date Profil</ToggleButton>
                        <ToggleButton value={'Vizualizeaza Comenzi'}>Vizualizeaza Comenzi</ToggleButton>



                    </ToggleButtonGroup>
                </div>

                {alignmentUser === 'Date Profil' && (<div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Informatii utilizator</h3>

                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.email}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Numar comenzi</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userOrders.length}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Actiuni</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><Button variant="contained" color="error" onClick={() => { deleteUser1(user); logOut(); router.push('/') }}>Sterge contul</Button></dd>
                            </div>



                        </dl>
                    </div>
                </div>)}
                {alignmentUser === 'Vizualizeaza Comenzi' && (<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Preparate
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Adresa
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Telefon
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data Livrare
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            {userOrders.map((doc, index) => {

                                if (displayCart(doc.cart).length === 4)
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td class="px-6 py-4">
                                                {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {doc.adresa}
                                            </td>
                                            <td class="px-6 py-4">
                                                {doc.telefon}
                                            </td>

                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(doc.cart)[0].idDate.seconds).toString()}
                                            </td>


                                        </tr>)

                                if (displayCart(doc.cart).length === 20)

                                    return (
                                        <>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[1].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[4].meniu}, ${displayCart(doc.cart)[5].meniu}, ${displayCart(doc.cart)[6].meniu}, ${displayCart(doc.cart)[7].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[4].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[8].meniu}, ${displayCart(doc.cart)[9].meniu}, ${displayCart(doc.cart)[10].meniu}, ${displayCart(doc.cart)[11].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[8].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[12].meniu}, ${displayCart(doc.cart)[13].meniu}, ${displayCart(doc.cart)[14].meniu}, ${displayCart(doc.cart)[15].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[12].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[16].meniu}, ${displayCart(doc.cart)[17].meniu}, ${displayCart(doc.cart)[18].meniu}, ${displayCart(doc.cart)[19].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[16].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                        </>
                                    )

                                if (displayCart(doc.cart).length === 100)
                                    return (
                                        <>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[0].meniu}, ${displayCart(doc.cart)[1].meniu}, ${displayCart(doc.cart)[2].meniu}, ${displayCart(doc.cart)[3].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[0].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[4].meniu}, ${displayCart(doc.cart)[5].meniu}, ${displayCart(doc.cart)[6].meniu}, ${displayCart(doc.cart)[7].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[4].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[8].meniu}, ${displayCart(doc.cart)[9].meniu}, ${displayCart(doc.cart)[10].meniu}, ${displayCart(doc.cart)[11].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[8].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[12].meniu}, ${displayCart(doc.cart)[13].meniu}, ${displayCart(doc.cart)[14].meniu}, ${displayCart(doc.cart)[15].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[12].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[16].meniu}, ${displayCart(doc.cart)[17].meniu}, ${displayCart(doc.cart)[18].meniu}, ${displayCart(doc.cart)[19].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[16].idDate.seconds).toString()}
                                                </td>


                                            </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[20].meniu}, ${displayCart(doc.cart)[21].meniu}, ${displayCart(doc.cart)[22].meniu}, ${displayCart(doc.cart)[23].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[20].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[24].meniu}, ${displayCart(doc.cart)[25].meniu}, ${displayCart(doc.cart)[26].meniu}, ${displayCart(doc.cart)[27].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[24].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[28].meniu}, ${displayCart(doc.cart)[29].meniu}, ${displayCart(doc.cart)[30].meniu}, ${displayCart(doc.cart)[31].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[28].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[32].meniu}, ${displayCart(doc.cart)[33].meniu}, ${displayCart(doc.cart)[34].meniu}, ${displayCart(doc.cart)[35].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[32].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={doc.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    { }
                                                </th>
                                                <td class="px-6 py-4">
                                                    {`${displayCart(doc.cart)[36].meniu}, ${displayCart(doc.cart)[37].meniu}, ${displayCart(doc.cart)[38].meniu}, ${displayCart(doc.cart)[39].meniu}`}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.adresa}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {doc.telefon}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {transformDate(displayCart(doc.cart)[36].idDate.seconds).toString()}
                                                </td>


                                            </tr>
                                        </>)


                            })}



                        </tbody>
                    </table>
                </div>)}
            </>}
        </>
    )
}


export default Admin;