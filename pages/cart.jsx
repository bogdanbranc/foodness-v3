import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PreviewPage from './checkout';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useRouter } from 'next/router'
import Link from 'next/link'
import OrderDataService from './services/order.services'
import { setStateCart } from '../redux/cartSlice';
import Alert from '@mui/material/Alert';

const cart = () => {
    const cart2 = useSelector((state) => state.cart.value);
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();

    const [tip, setTip] = useState('09-10')
    const [adresa, setAdresa] = useState('')
    const [telefon, setTelefon] = useState('')
    const [alignment, setAlignment] = useState('Plata online')

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);


    };

    const [message, setMessage] = useState('')

    useEffect(() => {


        setCart(cart2)

        console.log(cart2);
    }, [cart2]);

    function cartElements() {
        if (cart2.cart) {
            return cart2.cart;
        }
        if (cart.cart) {
            return cart.cart;
        }

        return []
    }



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
        const cartAux = [...cart]

        cartAux.sort(compare);
        cartAux.forEach(element => {
            items.push(element)
        });

        return items;
    }

    function transformDate(seconds) {

        return `${seconds.getDate()}/${seconds.getMonth()}/${seconds.getFullYear()}`;
    }

    function pretMaker() {
        console.log(cart);
        if (cart.tipAbonament === '1') {
            return 75;
        }

        if (cart.tipAbonament === '5') {
            return 5 * 70;
        }

        if (cart.tipAbonament === '10') {
            return 65 * 10;
        }
    }


    return (
        <div >

            {cart.cart || cart2.cart ? <div className='flex flex-row'>
                <div className="flex flex-col gap-10 flex-spx-4 py-4 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
                    <div className=" relative overflow-x-auto shadow-md sm:rounded-lg " >
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Imagini
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Preparate
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Data Livrare
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Pret
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Actiuni
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {cartElements().length === 4 &&

                                    (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>
                                            <td class="px-6 py-4">
                                                <img src={displayCart(cartElements())[0].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[1].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[2].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[3].imagine} width="40" height="40"></img>
                                            </td>
                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[0].meniu}, ${displayCart(cartElements())[1].meniu}, ${displayCart(cartElements())[2].meniu}, ${displayCart(cartElements())[3].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[1].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4">
                                                {pretMaker()} lei
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>)




                                }

                                {cartElements().length === 20 &&

                                    (<>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>
                                            <td class="px-6 py-4">
                                                <img src={displayCart(cartElements())[0].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[1].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[2].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[3].imagine} width="40" height="40"></img>
                                            </td>
                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[0].meniu}, ${displayCart(cartElements())[1].meniu}, ${displayCart(cartElements())[2].meniu}, ${displayCart(cartElements())[3].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[1].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>
                                            <td class="px-6 py-4">
                                                <img src={displayCart(cartElements())[4].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[5].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[6].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[7].imagine} width="40" height="40"></img>
                                            </td>
                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[4].meniu}, ${displayCart(cartElements())[5].meniu}, ${displayCart(cartElements())[6].meniu}, ${displayCart(cartElements())[7].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[4].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>
                                            <td class="px-6 py-4">
                                                <img src={displayCart(cartElements())[8].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[9].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[10].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[11].imagine} width="40" height="40"></img>
                                            </td>
                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[8].meniu}, ${displayCart(cartElements())[9].meniu}, ${displayCart(cartElements())[10].meniu}, ${displayCart(cartElements())[11].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[8].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>
                                            <td class="px-6 py-4">
                                                <img src={displayCart(cartElements())[12].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[13].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[14].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[15].imagine} width="40" height="40"></img>
                                            </td>
                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[12].meniu}, ${displayCart(cartElements())[13].meniu}, ${displayCart(cartElements())[14].meniu}, ${displayCart(cartElements())[15].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[12].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>
                                            <td class="px-6 py-4">
                                                <img src={displayCart(cartElements())[16].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[17].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[18].imagine} width="40" height="40"></img>
                                                <img src={displayCart(cartElements())[19].imagine} width="40" height="40"></img>
                                            </td>
                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[16].meniu}, ${displayCart(cartElements())[17].meniu}, ${displayCart(cartElements())[18].meniu}, ${displayCart(cartElements())[19].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[16].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                    </>)




                                }

                                {cartElements().length === 100 &&

                                    (<>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[0].meniu}, ${displayCart(cartElements())[1].meniu}, ${displayCart(cartElements())[2].meniu}, ${displayCart(cartElements())[3].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[1].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[4].meniu}, ${displayCart(cartElements())[5].meniu}, ${displayCart(cartElements())[6].meniu}, ${displayCart(cartElements())[7].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[4].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[8].meniu}, ${displayCart(cartElements())[9].meniu}, ${displayCart(cartElements())[10].meniu}, ${displayCart(cartElements())[11].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[8].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[12].meniu}, ${displayCart(cartElements())[13].meniu}, ${displayCart(cartElements())[14].meniu}, ${displayCart(cartElements())[15].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[12].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[16].meniu}, ${displayCart(cartElements())[17].meniu}, ${displayCart(cartElements())[18].meniu}, ${displayCart(cartElements())[19].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[16].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>

                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[20].meniu}, ${displayCart(cartElements())[21].meniu}, ${displayCart(cartElements())[22].meniu}, ${displayCart(cartElements())[23].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[20].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[24].meniu}, ${displayCart(cartElements())[25].meniu}, ${displayCart(cartElements())[26].meniu}, ${displayCart(cartElements())[27].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[24].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[28].meniu}, ${displayCart(cartElements())[29].meniu}, ${displayCart(cartElements())[30].meniu}, ${displayCart(cartElements())[31].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[28].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[32].meniu}, ${displayCart(cartElements())[33].meniu}, ${displayCart(cartElements())[34].meniu}, ${displayCart(cartElements())[35].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[32].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={'doc.id'}>

                                            <td class="px-6 py-4">
                                                {`${displayCart(cartElements())[36].meniu}, ${displayCart(cartElements())[37].meniu}, ${displayCart(cartElements())[38].meniu}, ${displayCart(cartElements())[39].meniu}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                {transformDate(displayCart(cartElements())[36].idDate).toString()}
                                            </td>
                                            <td class="px-6 py-4 ">

                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => { dispatch(setStateCart([])) }}>Sterge</button>
                                            </td>

                                        </tr>
                                    </>)




                                }



                            </tbody>
                        </table>

                    </div>
                    <div>
                        <div className="mt-10 sm:mt-0">

                            <div className="md:grid md:grid-cols-1 md:gap-1">

                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form action="#" method="POST">
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-1 gap-6">



                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                            Adresa
                                                        </label>
                                                        <input
                                                            onChange={(e) => setAdresa(e.target.value)}
                                                            value={adresa}
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                            Telefon
                                                        </label>
                                                        <input
                                                            onChange={(e) => setTelefon(e.target.value)}
                                                            value={telefon}
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                            Interval Livrare
                                                        </label>
                                                        <select
                                                            onChange={(e) => setTip(e.target.value)}
                                                            value={tip}
                                                            id="country"
                                                            name="country"
                                                            autoComplete="country-name"
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            <option>09-10</option>
                                                            <option>10-11</option>
                                                            <option>11-12</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <ToggleButtonGroup
                                                            color="primary"
                                                            value={alignment}
                                                            exclusive
                                                            onChange={handleChange}
                                                        >
                                                            <ToggleButton value={'Plata online'}>Plata online</ToggleButton>
                                                            <ToggleButton value={'Plata ramburs'}>Plata ramburs</ToggleButton>



                                                        </ToggleButtonGroup>
                                                    </div>

                                                    {alignment === 'Plata online' && <PreviewPage />}
                                                    {alignment === 'Plata ramburs' && <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                const newCart = { ...cart };
                                                                newCart.adresa = adresa;
                                                                newCart.ora = tip;
                                                                newCart.telefon = telefon;
                                                                OrderDataService.addOrder(newCart)
                                                            }}
                                                            type="submit"
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            Plaseaza Comanda
                                                        </button>
                                                        <div>{pretMaker()} lei</div>
                                                    </div>}

                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div> :

                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>

                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Cosul este gol</h2>

                        </div>

                        <input type="hidden" name="remember" defaultValue="true" />



                        <div

                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >

                            <Link href="/meniu">Spre Meniu</Link>
                        </div>

                    </div>
                </div>}

        </div>
    )
}

export default cart;