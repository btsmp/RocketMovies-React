import img from '../assets/cine.png'

export function CineBg() {
  return (
    <div className='h-screen w-full overflow-hidden brightness-50'>
      <img src={img} className="h-full w-full" />
    </div>
  )
}