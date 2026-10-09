import React from 'react'

const Cards = () => {

  const products = [

     {
      id: 1,
      name: "Shiryansh Singh ",
      price: "Front-End Developer ",
      location: "Alwar",
     image: "/sir.png"
    },
     {
      id: 2,
      name: "Bhanu Katariya Grras",
      price: "  MERN Stack Developer ",
      location: "Alwar",
       image: "/bhanu.png"
    },
     {
      id: 3,
      name: "Nishu Grras",
      price: "Mern Stack Devloper",
      location: "Bihar",
       image: "/nishu.png"
    },
    {
      id: 4,
      name: "Chetna Nawariya ",
      price: "Mern Stack Devloper",
      location: "Jaipur",
       image: "/chetna.png"
    },
     {
      id: 5,
      name: "Ashish Kumar Sharma",
      price: "Java Full-Stack Developer",
      location: "Jaipur",
      image: "/ashu01.png"
    },
     {
      id: 6,
      name: "Gargee Dadhich",
      price: " Mern Stack Devloper ",
      location: "Ajmer",
       image: "/gargee.png"
    },
    {
      id: 7,
      name: "iPhone 15",
      price: "₹70,000",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd"
    },
    {
      id: 8,
      name: "MacBook Air",
      price: "₹85,000",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      name: "Samsung Galaxy",
      price: "₹45,000",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
    },
    {
      id: 10,
      name: "Sony Headphones",
      price: "₹12,000",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }, 

 
  ]

  return (
    <div className="container mt-4">

      <div className="row">

        {products.map((product) => (

        <div className="col-md-4 mb-4" key={product.id}>

            <div className="card h-100">

              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />

              <div className="card-body">

                <h5 className="card-title">
                  {product.name}
                </h5>

                <h6>
                  {product.price}
                </h6>

                <p className="card-text">
                  <i className="bi bi-geo-alt"></i> {product.location}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Cards