import { useEffect, useState } from "react"
import "./BadgerMart.css"
import BadgerSaleItem from "./BadgerSaleItem";
import { Col, Container, Row } from "react-bootstrap";


export default function BadgerMart(props) {

    const [saleItems, setSaleItems] = useState([]);
    const [firstline, setFirstline] = useState([]);

    useEffect(() => {
        fetch("https://cs571.org/api/s24/hw3/all-sale-items", {
            headers: {
                "X-CS571-ID": "bid_fa_dee295439886d4d7515fc8ecd9f525126add11e5a00bf859fc78b2ff44bd66a8" 
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSaleItems(data);
        })
    }, [])


    useEffect(()=>{
        fetch("https://cs571.org/api/s24/hw3/featured-sale-item", {
            headers: {
                "X-CS571-ID": "bid_fa_dee295439886d4d7515fc8ecd9f525126add11e5a00bf859fc78b2ff44bd66a8" 
            }
        })
        .then(res => res.json())
        .then(data => {
            setFirstline(data);
        })
    },[])

    return <div>
        <h1>Badger Mart</h1>
        <h3>Welcome to our small-town mini mart located in Madison, WI!</h3>
        <h5>Today's featured item is {firstline.name} for ${firstline.price} !</h5>
        <Container>
            <Row>
            {
                saleItems.map(saleItem => {
                    return <Col key={saleItem.name} xs={12} md={6} lg={4} xl={3}>
                        <BadgerSaleItem
                            name={saleItem.name}
                            description={saleItem.description}
                            price={saleItem.price}
                            featured={saleItem.featured}
                            
                        />
                    </Col>
                })
            }
            </Row>
        </Container>
    </div>
}