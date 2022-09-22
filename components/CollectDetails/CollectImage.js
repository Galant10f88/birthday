import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { MediaRenderer, ThirdwebNftMedia } from '@thirdweb-dev/react'

const style = {
  wrapper: `rounded-lg border dark:border-transparent bg-[#313339]`,
  nftHeader: `flex items-center justify-between p-4`,
  likesContainer: `flex items-center justify-end space-x-2`,
  heartIcon: `h-5 w-5 text-red-500`,
  likesCount: `text-sm font-semibold text-gray-500`,
  nftImage: `rounded-b-lg object-cover`,
  test: `h-[448px] w-[448px]`
}

const NFTImage = ({image}) => {
  //console.log(image)
  return (
    <div className = {style.wrapper}>
      <div className = {style.nftHeader}>
        <Image height = {20} width = {20} 
          src = '/eth-logo.svg' alt = 'eth' />

        <div className = {style.likesContainer}>
          <AiOutlineHeart className = {style.heartIcon}/>
          <div className = {style.likesCount}>200</div>
        </div>
      </div>

      <div>
        {image&&<ThirdwebNftMedia
          className = {style.test}
          //src = {image}
          metadata={image}
          width = {448}
          height = {448}
          alt = "nft"
        />}
      </div>
    </div>
  )
}

export default NFTImage