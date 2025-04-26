import React from 'react';
import './product-details.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { notFound } from 'next/navigation';
import { arrData } from 'app/(home)/myproduct';

// async function getData(iddd) {
//   const res = await fetch(`http://localhost:4000/products/${iddd}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     // throw new Error("Failed to fetch data");
//      notFound();
//   }
//   return res.json();
// }

//dynamic  title
// export async function generateMetadata({ params }) {
//   const objData = await getData(params.id);
//   return {
//     title: objData.title,
//     description: objData.description,
//   }
// }

// هذه الدالة جلبت البيانات من arrData عبر الفلترة باستخدام id.
const getProductById = (id) => {
  const product = arrData.find(p => p.id === id);
  if (!product) {
    notFound(); // إذا لم يتم العثور على المنتج، يتم عرض صفحة "غير موجود"
  }
  return product;
};

const Page = async ({ params }) => {

  // const objData = await getData(params.id);
  // console.log(objData)
 const objData = getProductById(params.id); // الحصول على المنتج بناءً على المعرف

  return (
    <div >

<main
  style={{
    textAlign: "center",
    paddingTop: "6rem", // 🧠 لازم نفس ارتفاع الهيدر
    paddingBottom: "4rem", // 🧠 علشان الفوتر
    paddingInline: "2rem",
  }}
  className="flex"
>        <img alt={objData.title} src={objData.productImg} width={300} />
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{objData.title}</h2>
            <p className="price">${objData.price}</p>
          </div>
          <p className="description">{objData.description}</p>
          <button className="flex add-to-cart">
          <FontAwesomeIcon style={{width:"0.8rem"}} icon={faCartPlus} /> 
           Add To Cart
          </button>
        </div>
      </main>

    

    </div>
  );
};

export default Page;
