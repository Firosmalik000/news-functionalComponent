import { Button, Form, InputGroup } from 'react-bootstrap';

export function SearchInput({ onSearch }) {
  return (
    <>
      <form action="" style={{ paddingTop: '3rem', textAlign: 'center' }}>
        <input type="search" style={{ height: '3rem', width: '80rem', borderRadius: '10px' }} placeholder="🔍 Search" onChange={({ target }) => onSearch(target.value)} />
      </form>
      {/* <Form className="d-flex w-100 py-100">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(element) => onSearch(element.target.value)} />
      </Form> */}
    </>
  );
}
