import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { useNavigate } from 'react-router-dom';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';
import Loader from '../../components/loader/Loader';

function myState(props) {
    const navigate = useNavigate(); // Initialize useNavigate outside of the component body

    const [mode, setMode] = useState('dark');
    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = "white";
        } else {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)";
        }
    };

    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("all fields are required");
        }

        setLoading(trunpe);

        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, products);
            toast.success("Add product successfully");
            setTimeout(() => {
                navigate('/dashboard'); // Redirect to dashboard after adding product
            }, 800);
            getProductData();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const [product, setProduct] = useState([]);

    const getProductData = async () => {
        setLoading(true);

        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
                setLoading(false);
            });

            return () => data;

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    // update product function

    const edithandle = (item) => {
        setProducts(item);
    };

    const updateProduct = async () => {
        setLoading(true);

        try {
            await setDoc(doc(fireDB, 'products', products.id), products);
            toast.success("Product Updated successfully");
            navigate('/dashboard'); // Redirect to dashboard after updating product
            getProductData();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // delete product

    const deleteProduct = async (item) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'products', item.id));
            toast.success('Product Deleted successfully');
            navigate('/dashboard'); // Redirect to dashboard after deleting product
            getProductData();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey,filterType,setFilterType,
            filterPrice,setFilterPrice
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default myState