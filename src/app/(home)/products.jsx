  import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import Link from 'next/link';
  import React from 'react';
  import Image from "next/image"; // فوق مع الاستيرادات


  async function getData() {
    await new Promise(resolve => setTimeout(resolve, 2000)) // استنى هنا 5 ثوانى 
    // const res = await fetch("https://fakestoreapi.com/products", {
      const res = await fetch("http://localhost:4000/products", {
      // Next.js caching options:
      next: { revalidate: 0 }, // 60 seconds ISR يحتفظ بالبيانات لمدة معينة بالثوانى 
    });

    if (!res.ok) throw new Error("Failed to fetch data");

    return res.json();
  }

  const Products = async () => {

    const data = await getData();
    console.log(data)


    return (
      <section className="products flex">
      {data.map((product, index) => (
        <article title={product.title} key={product.id} className="card">
      <Link href={`/product-details/${product.id}`}>
        <Image width={266} height={310}  quality={100} src={product.productImg} 
                          alt={`Product ${index + 1}`} />
      </Link>
          <div style={{ width: 266 }} className="content">
            {/* //يعرض اول 20 حرف فقط  */}
            <h1 className="title">{product.title.slice(0,22)}...</h1> 
            <p className="description">
            {product.description.slice(0,112)}...
            </p>
            <div className="flex" style={{ justifyContent: "space-between", paddingBottom: "0.7rem" }}>
              <div className="price">{product.price}</div>
              <button className="add-to-cart flex">
            <FontAwesomeIcon style={{width:"0.8rem"}} icon={faCartPlus} /> 
                Add To Cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>

    );
  }

  export default Products;
