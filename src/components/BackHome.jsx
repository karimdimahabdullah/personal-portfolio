import { Link } from 'react-router-dom'

export default function BackHome() {
  return (
    <Link className="back-home" to="/">
      <span aria-hidden="true">←</span> Back to home
    </Link>
  )
}
