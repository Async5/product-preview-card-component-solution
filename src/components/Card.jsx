import DesktopImg from '../images/image-product-desktop.jpg'
import MobileImg from '../images/image-product-mobile.jpg'
import icon from '../images/icon-cart.svg'
import Button from './Button'

const Card = () => {
  return (
    <div className="bg-white w-11/12 rounded-xl overflow-hidden md:grid md:grid-cols-2 max-w-xl drop-shadow-md">
      <img
        className="h-full object-cover md:hidden"
        src={MobileImg}
        alt="product"
      />
      <img
        className="h-full object-cover max-[768px]:hidden"
        src={DesktopImg}
        alt="product"
      />
      <div className="p-7 md:p-8">
        <span className="uppercase tracking-ultraWider text-sm text-neutral-darkGrayishblue mb-2 block">
          parfume
        </span>
        <h1 className="font-fraunces text-neutral-veryDarkBlue text-3xl md:text-4xl mb-3">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-sm text-neutral-darkGrayishblue leading-6 mb-5">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center mb-4">
          <span className="font-fraunces text-3xl mr-4 text-primary-darkCyan">
            $149.99
          </span>
          <span className="line-through text-sm text-neutral-darkGrayishblue">
            $169.99
          </span>
        </div>
        <Button icon={icon} text={'Add to Cart'} />
      </div>
    </div>
  )
}

export default Card
