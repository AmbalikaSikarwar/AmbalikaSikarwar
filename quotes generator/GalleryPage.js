import React, {useEffect, useState} from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const quotes = [{
  id: 0,
  quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
   
  },
  {
    id: 1,
  quote: "Strive not to be a success, but rather to be of value."
  },
  {
    id: 10,
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving. "
    },
    {
      id: 100,
      quote: "Life isn't about finding yourself. Life is about creating yourself. "
      },
      {
        id: 1001,
        quote: "We do not remember days, we remember moments. "
        },
        {
          id: 1000,
          quote: "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them. "
          },
          {
            id: 1002,
            quote: "Nobody made a greater mistake than he who did nothing because he could do only a little. "
            },
            {
              id: 1003,
              quote: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
              },
              {
                id: 1004,
                quote: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
                },
                {
                  id: 1005,
                  quote: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
                  },
                  {
                    id: 1006,
                    quote: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
                    },
                    {
                      id: 1007,
                      quote: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
                      },
                      {
                        id: 1008,
                        quote: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
                        },
  
            ]

const GalleryPage = () => {

  const [state, setState] = useState([])
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
      .then((result) => result.json())
      .then((responce) => {
        setState(responce);
      })
      .catch(() => console.log("error is found"));
  }, [page]);


  const quoteGenerate = () => {
    setPage(page + 1);
  }


console.log(4444, state)

  return (
    <div className="mainContainer">
      <Container>
        <Row>
          {state.map((item, index) => {
            return (
              <Col sm={4} className="customiseColoum">
              <div className="imageBox">
                <Image src={item.download_url} />
                
               {quotes.map((data) => {
                if (item.id == data.id) {
                return (
                  <div class="overlay">
                 {data.quote} 
                </div>
                )}
               })}
              </div>
            </Col>
            )
          }
            
          )}
          <Col lg={12}>
            <hr className="divider" />

            <Button className="generateBtn" onClick={()=> quoteGenerate()}>Generate</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryPage;
