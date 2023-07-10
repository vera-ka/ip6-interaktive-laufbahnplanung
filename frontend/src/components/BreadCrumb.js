import { Link } from 'react-router-dom'

export default function BreadCrumb ({ activeCrumb }) {
  return (
    <div style={{ marginBottom: '70px' }}>
      <Link to="/laufbahnplanung" className="secondary-text default-link"
            style={{ marginBottom: '20px', borderBottom: '1px dotted' }}>Laufbahnplanung</Link>
      <span style={{ fontSize: '30px', margin: '10px' }}> > </span>
      <h1 className="primary-text">{activeCrumb}</h1>
    </div>
  )
}
