import { Link } from 'react-router-dom'

export default function BackHome() {
  return (
    <Link className="back-home" to="/">
      ← Back to home
    </Link>
  )
}
