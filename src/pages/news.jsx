import NavbarNews from '../component/fragment/navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getNews } from '../services/servicesAPI';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SearchInput } from '../component/element/input';
import axios from 'axios';

const NewsPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=b1fcac5f23714f5ab2582ce347bbff75&i=google-news`);
        console.log(data.articles);
        setNews(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // state untuk search
  const [search, setSearch] = useState('');
  console.log(search);
  //   state baru untuk fetching
  const [articles, setNews] = useState([]);

  return (
    <>
      <NavbarNews />
      <form action="" style={{ paddingTop: '3rem', textAlign: 'center' }}>
        <input type="search" style={{ height: '3rem', width: '80rem', borderRadius: '10px' }} placeholder="🔍 Search" onChange={(event) => setSearch(event.target.value)} value={search} />
      </form>
      <Container className="justify-between">
        <Row className="mt-4">
          {articles.length > 0 &&
            articles
              .filter((articles) => {
                return search.toLowerCase() === '' ? articles : articles.title.toLowerCase().includes(search);
              })
              .map((article) => (
                <Col xs md="6" lg="3" key={article.url} className="text-center">
                  <Card className="my-20 shadow-sm" style={{ width: '20rem', marginTop: '5rem' }}>
                    <Card.Img variant="top" src={article.urlToImage} />
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Subtitle className="mb-2 font-sm text-muted">{article.author}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 font-sm text-muted">{article.publishedAt}</Card.Subtitle>
                      <Button variant="primary">
                        <a href={article.url} className="text-light">
                          Show Details
                        </a>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default NewsPage;
