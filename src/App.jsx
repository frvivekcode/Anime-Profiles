import React from 'react'
import Card from './Components/Card'

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

const App = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

const users = [
     {
    fullName: "Sung Jin Woo",
    description: "From weakest hunter to Shadow Monarch, commanding shadows with unstoppable growing power.",
    profile: " https://i.pinimg.com/736x/7b/2f/5e/7b2f5e8a0b004a9db25a7ec427dae1d0.jpg",
    coverImage: "https://i.pinimg.com/1200x/4a/fa/0f/4afa0f264308d92feefe252da4e4107b.jpg",
    likesCount: "10000000B",
    postCount: 1,
    viewsCount: '9999999999B+',
    followed: true
  },
  {
    fullName: "Naruto Uzumaki",
    description: "Energetic ninja striving tirelessly to become Hokage and protect his village.",
    profile: "https://i.pinimg.com/736x/c4/a4/42/c4a44267bc3683bbe498d86888a07124.jpg",
    coverImage: "https://i.pinimg.com/736x/f7/4a/2b/f74a2b3c15a7b42670a402bce67991aa.jpg",
    likesCount: 125000,
    postCount: 320,
    viewsCount: 890000,
    followed: true
  },
  {
    fullName: "Sasuke Uchiha",
    description: "Cold avenger seeking power relentlessly to restore honor of his clan.",
    profile: "https://i.pinimg.com/736x/42/14/01/421401277cc619a0e6779e8ed0bf9a90.jpg",
    coverImage: "https://i.pinimg.com/736x/73/39/f2/7339f250437f4de0b89be7da96ac6bd8.jpg",
    likesCount: 98000,
    postCount: 210,
    viewsCount: 720000,
    followed: false
  },
  {
    fullName: "Monkey D. Luffy",
    description: "Fearless pirate captain chasing freedom and the legendary One Piece treasure.",
    profile: " https://i.pinimg.com/736x/22/aa/75/22aa7587e163ff6188499cfa2cbb44f8.jpg",
    coverImage: "https://i.pinimg.com/736x/27/b9/5c/27b95c3ab9120a3a052f5cd8d2ac13b2.jpg ",
    likesCount: 150000,
    postCount: 400,
    viewsCount: 1200000,
    followed: true
  },
  {
    fullName: "Roronoa Zoro",
    description: "Determined swordsman training endlessly to become the world's greatest warrior.",
    profile: " https://i.pinimg.com/736x/13/be/db/13bedb44c703f3a2a5cee1a1b6873641.jpg",
    coverImage: "https://i.pinimg.com/1200x/c3/25/39/c325393378216c6dd7329d738a744940.jpg ",
    likesCount: 87000,
    postCount: 185,
    viewsCount: 640000,
    followed: false
  },
  {
    fullName: "Eren Yeager",
    description: "Driven by freedom, fighting fiercely against titans beyond massive walls.",
    profile: "https://i.pinimg.com/736x/0b/43/42/0b4342451e511f651d461edb1c3a7df9.jpg ",
    coverImage: " https://i.pinimg.com/736x/50/00/5a/50005a444e9d702e6b87fb139b90ff1c.jpg",
    likesCount: 110000,
    postCount: 260,
    viewsCount: 950000,
    followed: true
  },
  {
    fullName: "Levi Ackerman",
    description: "Humanity's strongest soldier, unmatched skills and deadly precision in battle.",
    profile: "https://i.pinimg.com/736x/f6/55/7e/f6557e47a0c065cf7bd23a98533b299d.jpg ",
    coverImage: "https://i.pinimg.com/736x/51/bb/5f/51bb5f2bc0b2285fd8ff28a5493386ca.jpg",
    likesCount: 132000,
    postCount: 290,
    viewsCount: 1000000,
    followed: true
  },
  {
    fullName: "Gojo Satoru",
    description: "Limitless sorcerer possessing overwhelming cursed energy and unmatched combat abilities.",
    profile: " https://i.pinimg.com/736x/b1/eb/8f/b1eb8fc1121db8efdfff1c15caa07b69.jpg ",
    coverImage: "https://i.pinimg.com/736x/35/13/c0/3513c040b50daa886ec0193804d4ccc9.jpg",
    likesCount: 175000,
    postCount: 350,
    viewsCount: 1400000,
    followed: false
  },
  {
    fullName: "Tanjiro Kamado",
    description: "Kind-hearted demon slayer protecting humanity while searching cure for sister.",
    profile: " https://i.pinimg.com/736x/5a/ae/69/5aae6947f80a58736bd040e98830c13f.jpg",
    coverImage: "https://i.pinimg.com/736x/23/82/f1/2382f15fe9dee90ff77e625d1971e1ff.jpg ",
    likesCount: 92000,
    postCount: 170,
    viewsCount: 610000,
    followed: true
  },
  {
    fullName: "Itachi Uchiha",
    description: "Silent prodigy sacrificing everything to protect village from darkness.",
    profile: " https://i.pinimg.com/736x/20/42/ca/2042ca80c55a0643ec5ac35e71128326.jpg",
    coverImage: " https://i.pinimg.com/1200x/8e/ca/57/8eca57a00f5974c875a0952dc52841c4.jpg",
    likesCount: 143000,
    postCount: 275,
    viewsCount: 980000,
    followed: false
  },
  {
    fullName: "Mikasa Ackerman",
    description: "Elite warrior fiercely loyal, protecting loved ones with unmatched strength.",
    profile: " https://i.pinimg.com/736x/6e/c3/50/6ec350120759d6f7d891a0bd0915631f.jpg",
    coverImage: "https://i.pinimg.com/736x/26/f9/37/26f9375b69cc3c700f3056c8fb45cf4e.jpg",
    likesCount: 118000,
    postCount: 230,
    viewsCount: 870000,
    followed: true
  },

  {
    fullName: "Kakashi Hatake",
    description: "Copy Ninja mastering countless jutsu while calmly guiding Team Seven.",
    profile: "https://i.pinimg.com/1200x/60/1d/e3/601de3c6087e6f83613b788347846230.jpg",
    coverImage: "https://i.pinimg.com/736x/09/3d/29/093d298f4236a7fc76c8ef5deb272153.jpg",
    likesCount: 99000,
    postCount: 240,
    viewsCount: 780000,
    followed: true
  },
   
  {
  fullName: "Killua Zoldyck",
  description: "Elite assassin prodigy seeking freedom beyond family's deadly expectations.",
  profile: "https://i.pinimg.com/736x/a9/05/3a/a9053ae6aa1a8089c97901e0a6dbebfc.jpg",
  coverImage: "https://i.pinimg.com/736x/a9/05/3a/a9053ae6aa1a8089c97901e0a6dbebfc.jpg",
  likesCount: 88000,
  postCount: 190,
  viewsCount: 650000,
  followed: false
},
{
  fullName: "Gon Freecss",
  description: "Optimistic young hunter chasing dreams and searching for his father.",
  profile: "https://i.pinimg.com/736x/59/a8/cf/59a8cf0b287a3ac35c73ae0186e19ba0.jpg",
  coverImage: "https://i.pinimg.com/736x/33/2d/ba/332dba40dd69f0f75cd698eabc66f06e.jpg",
  likesCount: 92000,
  postCount: 210,
  viewsCount: 700000,
  followed: true
},
{
  fullName: "Ichigo Kurosaki",
  description: "Substitute Soul Reaper protecting humans from dangerous spiritual threats.",
  profile: "https://i.pinimg.com/1200x/cf/f6/6b/cff66bcd5361c982066aa65d6d345526.jpg",
  coverImage: "https://i.pinimg.com/736x/14/02/09/1402090430f598aa83053206039cfaea.jpg",
  likesCount: 140000,
  postCount: 300,
  viewsCount: 1100000,
  followed: true
},
{
  fullName: "Light Yagami",
  description: "Genius student wielding Death Note to create his twisted justice -Kira.",
  profile: "https://i.pinimg.com/1200x/14/9d/b8/149db84d646188b76100cabb2d250ccd.jpg",
  coverImage: "https://i.pinimg.com/736x/94/88/91/94889112e4dbca0112d914760f609c24.jpg",
  likesCount: 200000,
  postCount: 150,
  viewsCount: 1500000,
  followed: false
},
{
  fullName: "L Lawliet",
  description: "Brilliant detective determined to stop Kira using unmatched intellect.",
  profile: "https://i.pinimg.com/736x/3f/a0/ad/3fa0adf28e8738f67a7a39a7edd20e13.jpg",
  coverImage: "https://i.pinimg.com/1200x/f5/38/8e/f5388e2731be9b1659edaa772c5fbe7e.jpg",
  likesCount: 175000,
  postCount: 120,
  viewsCount: 1300000,
  followed: true
},
{
  fullName: "Edward Elric",
  description: "Young alchemist searching Philosopher's Stone to restore brother's body.",
  profile: "https://i.pinimg.com/1200x/4e/f1/ab/4ef1ab4abc581993ef27d0171a81b6ce.jpg",
  coverImage: "https://i.pinimg.com/736x/ee/4b/14/ee4b140ac5530458041d0b63eb9c32fd.jpg",
  likesCount: 98000,
  postCount: 180,
  viewsCount: 750000,
  followed: true
},
{
  fullName: "Alucard",
  description: "Immortal vampire serving Hellsing, annihilating enemies with terrifying power.",
  profile: "https://i.pinimg.com/736x/79/4f/2f/794f2f0de87a0d0dd85bb6e7f2d716d6.jpg",
  coverImage: "https://i.pinimg.com/1200x/c3/15/97/c31597da57b8d46e824a71df75109456.jpg",
  likesCount: 120000,
  postCount: 210,
  viewsCount: 880000,
  followed: false
},
{
  fullName: "Asta",
  description: "Magicless boy striving relentlessly to become Wizard King someday -Never Give Up Men.",
  profile: "https://i.pinimg.com/736x/14/bd/25/14bd25552fa3e3e44d6408ebb6d6f3ac.jpg",
  coverImage: "https://i.pinimg.com/1200x/50/8a/30/508a306f5e83db1035d4bbb777d3e515.jpg",
  likesCount: 89000,
  postCount: 160,
  viewsCount: 690000,
  followed: true
},
{
  fullName: "Vegeta",
  description: "Proud Saiyan prince constantly pushing limits to surpass rivals Ego.",
  profile: "https://i.pinimg.com/736x/b9/77/9b/b9779b11d1d7bea4cee17534f4ad7508.jpg",
  coverImage: "https://i.pinimg.com/736x/62/26/07/622607782f9dd6d51139063bab71cbfc.jpg",
  likesCount: 250000,
  postCount: 500,
  viewsCount: 2000000,
  followed: true
},
{
  fullName: "Goku",
  description: "Pure-hearted warrior defending Earth while constantly seeking stronger opponents.",
  profile: "https://i.pinimg.com/736x/3d/f0/9e/3df09ed549659ac9f5c5b9216194f4fd.jpg",
  coverImage: "https://i.pinimg.com/1200x/03/a0/2f/03a02fb01fd34e7ee9e0f032c604b7ff.jpg",
  likesCount: 300000,
  postCount: 600,
  viewsCount: 3000000,
  followed: true
},
{
  fullName: "Madara Uchiha",
  description: "Legendary Uchiha leader seeking infinite power to reshape shinobi world.",
  profile: "https://i.pinimg.com/736x/7d/21/72/7d2172664f36ddf95c407c44c2ad02a0.jpg",
  coverImage: "https://i.pinimg.com/736x/67/d8/16/67d816f184be772a624bba7085e357d0.jpg",
  likesCount: 210000,
  postCount: 410,
  viewsCount: 1800000,
  followed: false
},
{
  fullName: "Rimuru Tempest",
  description: "Reincarnated slime gaining extraordinary powers while building peaceful monster nation.",
  profile: "https://i.pinimg.com/1200x/4d/c3/2b/4dc32b968671d125797a118ea087f773.jpg",
  coverImage: "https://i.pinimg.com/1200x/56/9d/6f/569d6feef49cb2e547d7af2e6d47b737.jpg",
  likesCount: 160000,
  postCount: 260,
  viewsCount: 1200000,
  followed: true
}



  
];



  return (
    <div className=' bg-[#242424] text-white h-[vh]  p-8 flex flex-wrap'>
      {users.map(function(elem ){
     
        return    <Card 
        // key={index}
          fullName={elem.fullName}
          description={elem.description}
          profile={elem.profile}
          coverImage={elem.coverImage}
          likesCount={elem.likesCount}
          postCount={elem.postCount}
          viewsCount={elem.viewsCount}
          followed={elem.followed}
          />
      })}

      
      
    </div>
  )
}

export default App

