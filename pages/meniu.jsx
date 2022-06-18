import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect, useState } from "react";
import MenuDataService from './services/food.services';
import OrderDataService from './services/order.services';
import { useUserAuth1 } from "./context/UserAuthContext";
import { useDispatch, useSelector } from 'react-redux';
import { setStateCart } from '../redux/cartSlice';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router';

export default function Meniu() {

    const [breakfastMenus, setBreakastMenus] = useState([])
    const [lunchMenus, setLunchMenus] = useState([])
    const [dinnerMenus, setDinnerMenus] = useState([])
    const [dessertMenus, setDessertMenus] = useState([])
    const [date, setDate] = useState(null);
    const [dates, setDates] = useState([]);
    const [tipAbonament, setTipAbonament] = useState('');
    const [alignment, setAlignment] = useState('');
    const [currentItemDate, setCurrentItemDate] = useState('');
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState(false);
    const cartState = useSelector((state) => state.cart.value);

    let { user } = useUserAuth1();
    const router = useRouter();

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        setCurrentItemDate(newAlignment);

    };

    const handleAddToCart = (item) => {
        const isFoundByType = cart.some(element => {
            if (element.tip === item.tip) {
                return true;
            }

            return false;
        });

        const isFoundByDate = cart.some(element => {

            if (element.idDate.getDate() === currentItemDate.getDate()) {

                return true;

            }

            return false;
        });


        let result = false;
        const isFoundByDateXtype = cart.forEach(element => {

            if (element.idDate.getDate() === currentItemDate.getDate() && element.tip === item.tip) {

                result = true;

            }


        });
        console.log(cart);
        let auxCart = cart;
        if (auxCart.length === 0) {
            auxCart.push({
                idDate: currentItemDate,
                tip: item.tip,
                meniu: item.denumire,
                imagine: item.imageURL,
                calorii: item.calorii,
            })

        } else {

            if (isFoundByDate) {
                if (isFoundByType) {
                    if (result) {

                        auxCart = auxCart.map(e => {
                            if (e.tip !== item.tip) { return e; }
                            else
                                return {
                                    idDate: currentItemDate,
                                    tip: item.tip,
                                    meniu: item.denumire,
                                    imagine: item.imageURL,
                                    calorii: item.calorii,
                                }
                        });
                    } else {
                        auxCart.push({
                            idDate: currentItemDate,
                            tip: item.tip,
                            meniu: item.denumire,
                            imagine: item.imageURL,
                            calorii: item.calorii,
                        })
                    }


                } else {
                    auxCart.push({
                        idDate: currentItemDate,
                        tip: item.tip,
                        meniu: item.denumire,
                        imagine: item.imageURL,
                        calorii: item.calorii,
                    })
                }

            } else {


                auxCart.push({
                    idDate: currentItemDate,
                    tip: item.tip,
                    meniu: item.denumire,
                    imagine: item.imageURL,
                    calorii: item.calorii,
                })


            }
        }


        setCart([...auxCart]);
        console.log(getAllDaysCalories())
    }

    useEffect(() => {
        getMenus();
    }, [])



    const getMenus = async () => {
        const data = await MenuDataService.getAllMenus();



        setBreakastMenus(data.docs.filter((menu) => { return menu.data().tip === 'Mic dejun' }))
        setLunchMenus(data.docs.filter((menu) => { return menu.data().tip === 'Pranz' }))
        setDinnerMenus(data.docs.filter((menu) => { return menu.data().tip === 'Cina' }))
        setDessertMenus(data.docs.filter((menu) => { return menu.data().tip === 'Desert' }))
    }

    function disableWeekends(date) {
        return date.getDay() === 0 || date.getDay() === 6;
    }

    function dateMaker(date) {
        const dates = []

        const auxDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

        for (let i = 0; i < parseInt(tipAbonament); i++) {

            if (disableWeekends(auxDate)) {
                auxDate.setDate(auxDate.getDate() + 2)
            }

            dates.push(new Date(auxDate))
            auxDate.setDate(auxDate.getDate() + 1)
        }

        setDate(date);
        setDates(dates);

        return date;
    }

    const dispatch = useDispatch();


    function getAllDaysCalories() {
        console.log(cart);
        const unique = [...new Set(cart.map(item => item.idDate))];

        let caloriesPerDay = []
        unique.forEach(element => {
            caloriesPerDay.push({ date: element, calories: 0 })
        });

        cart.forEach(element => {
            caloriesPerDay.forEach(calories => {
                if (element.idDate === calories.date) {
                    calories.calories += element.calorii
                }
            });
        });

        return caloriesPerDay;

    }

    return (
        <>
            <div className="flex flex-row">

                <div className="flex flex-col gap-10 flex-spx-4 py-4 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">

                    <div className="grid max-w-md gap-10  lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">

                        <div className="flex flex-col p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">

                            <div className="text-center">
                                <div className="text-lg font-semibold">1 zi</div>
                                <div className="flex items-center justify-center">
                                    <div className="mr-1 text-3xl font-bold">75 lei</div>
                                </div>
                                <div className="mt-2 ">
                                    <div className="text-gray-700">Mic dejun x1</div>
                                    <div className="text-gray-700">Pranz x1</div>
                                    <div className="text-gray-700">Cina x1</div>
                                    <div className="text-gray-700">Desert x1</div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        setTipAbonament('1')
                                        if (date) {
                                            dateMaker(date)

                                        }
                                    }}
                                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                                >
                                    Alege
                                </button>

                            </div>
                        </div>

                        <div className="flex flex-col p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                            <div className="text-center">
                                <div className="text-lg font-semibold">5 zile</div>
                                <div className="flex items-center justify-center ">
                                    <div className="mr-1 text-3xl font-bold">70x5 lei</div>

                                </div>
                                <div className="mt-2 ">
                                    <div className="text-gray-700">Mic dejun x5</div>
                                    <div className="text-gray-700">Pranz x5</div>
                                    <div className="text-gray-700">Cina x5</div>
                                    <div className="text-gray-700">Desert x5</div>

                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        setTipAbonament('5')
                                        if (date) { dateMaker(date) }
                                    }}
                                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                                >
                                    Alege
                                </button>

                            </div>
                        </div>

                        <div className="flex flex-col p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                            <div className="text-center">
                                <div className="text-lg font-semibold">10 zile</div>
                                <div className="flex items-center justify-center">
                                    <div className="mr-1 text-3xl font-bold">65x10 lei</div>

                                </div>
                                <div className="mt-2 ">
                                    <div className="text-gray-700">Mic dejun x10</div>
                                    <div className="text-gray-700">Pranz x10</div>
                                    <div className="text-gray-700">Cina x10</div>
                                    <div className="text-gray-700">Desert x10</div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        setTipAbonament('10')
                                        if (date) { dateMaker(date) }
                                    }}
                                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                                >
                                    Alege
                                </button>

                            </div>
                        </div>
                    </div>

                    {tipAbonament && <div className="grid max-w-md lg:max-w-screen-lg xl:max-w-screen-lg sm:mx-auto">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            {tipAbonament === '1' ? 'Alegeti data de livrare' : `Alegeti data de inceput pentru cele ${tipAbonament} meniuri`}
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                inputFormat='dd/MM/yyyy'
                                disablePast={true}
                                shouldDisableDate={disableWeekends}
                                value={date}
                                onChange={(newValue) => {
                                    dateMaker(newValue);



                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />

                        </LocalizationProvider>
                    </div>}


                    {date && <div className="grid max-w-md lg:max-w-screen-lg xl:max-w-screen-lg sm:mx-auto">
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                        >   {date && dates.map((doc) => {

                            return (
                                <ToggleButton value={doc}>{`${doc.getDate()}-${doc.getMonth() + 1}-${doc.getFullYear()}`}</ToggleButton>

                            )
                        })}

                        </ToggleButtonGroup>
                    </div>}


                    {currentItemDate && <div className='grid  max-w-md gap-10  lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto'>
                        <div className="mr-1 text-5xl font-bold">Mic dejun</div>
                        {breakfastMenus.map((doc) => {

                            return (
                                <Card sx={{ maxWidth: 345 }} >
                                    <CardMedia
                                        component="img"
                                        sx={{ maxHeight: 150 }}
                                        image={doc.data().imageURL}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {doc.data().denumire}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${doc.data().proteine}g proteine ${doc.data().grasimi}g grasimi ${doc.data().carbohidrati}g carbohidrati`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${doc.data().calorii} kcalorii`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions >
                                        <Button size="small" onClick={() => { handleAddToCart(doc.data()); }}>Selecteaza</Button>
                                    </CardActions>
                                </Card>
                            )
                        })}

                        <div className="mr-1 text-5xl font-bold">Pranz</div>
                        {lunchMenus.map((doc) => {

                            return (
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ maxHeight: 150 }}
                                        image={doc.data().imageURL}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {doc.data().denumire}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${doc.data().proteine}g proteine ${doc.data().grasimi}g grasimi ${doc.data().carbohidrati}g carbohidrati`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${doc.data().calorii} kcalorii`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => { handleAddToCart(doc.data()); }}>Selecteaza</Button>
                                    </CardActions>
                                </Card>
                            )
                        })}
                        <div className="mr-1 text-5xl font-bold">Cina</div>
                        {dinnerMenus.map((doc) => {

                            return (
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ maxHeight: 150 }}
                                        image={doc.data().imageURL}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {doc.data().denumire}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${doc.data().proteine}g proteine ${doc.data().grasimi}g grasimi ${doc.data().carbohidrati}g carbohidrati`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${doc.data().calorii} kcalorii`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => { handleAddToCart(doc.data()); }}>Selecteaza</Button>
                                    </CardActions>
                                </Card>
                            )
                        })}
                        <div className="mr-1 text-5xl font-bold">Desert</div>
                        {dessertMenus.map((doc) => {

                            return (
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ maxHeight: 150 }}
                                        image={doc.data().imageURL}

                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {doc.data().denumire}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${doc.data().proteine}g proteine ${doc.data().grasimi}g grasimi ${doc.data().carbohidrati}g carbohidrati`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${doc.data().calorii} kcalorii`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className='flex'>
                                        <Button size="small" onClick={() => { handleAddToCart(doc.data()); }}>Selecteaza</Button>
                                    </CardActions>
                                </Card>
                            )
                        })}


                    </div>}


                    {/*shopping cart part */}

                    {currentItemDate && <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl ">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                                <div className="text-lg font-medium text-gray-900"> Shopping cart </div>

                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {cart.map((product) => (

                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                        src={product.imagine}

                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a > {product.meniu} </a>
                                                            </h3>
                                                            <p className="ml-4">{product.calorii}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{`${product.idDate.getDate()}-${product.idDate.getMonth() + 1}-${product.idDate.getFullYear()}`}</p>
                                                    </div>

                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Comenzi alese</p>
                                <p>{cart.length}/{tipAbonament * 4}</p>
                            </div>
                            {getAllDaysCalories().map((calories) => (<div className="flex justify-between text-base font-medium text-gray-900">
                                <p>{`Calorii ${calories.date.getDate()}-${calories.date.getMonth() + 1}-${calories.date.getFullYear()}`}</p>
                                <p>{calories.calories.toString()}</p>
                            </div>))}



                            <div className="mt-6">
                                <button
                                    onClick={() => {
                                        if (!user) {
                                            router.push('/login')
                                        } else {
                                            if (cart.length === tipAbonament * 4) {
                                                dispatch(setStateCart({ cart: cart, user: user.email, date: Date.now(), tipAbonament: tipAbonament }))
                                                setCart([])
                                                setMessage('ok');
                                            } else {
                                                setMessage('error');
                                            }
                                        }


                                        // OrderDataService.addOrder({ cart, user: user.email, date: Date.now() })
                                    }}
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Adauga Comanda
                                </button>
                                <div className='mt-6'>

                                    {message === 'ok' && <Alert onClose={() => { setMessage('x'); }} >Comanda a fost adaugata!</Alert>}
                                    {message === 'error' && <Alert onClose={() => { setMessage('x'); }} severity="error">Comanda nu este completa!</Alert>}

                                </div>
                            </div>

                        </div>
                    </div>}

                </div >

            </div>
        </>
    )
}