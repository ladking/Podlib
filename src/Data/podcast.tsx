export const TrendingPod: {id: number, name: string, imgurl: string, desc: string, episodes:number}[]=[
    {
        id: 0,
        name:"Stuffs you should know",
        imgurl:"https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d1/29/d0/d129d0a0-5305-9125-efa3-50163912c817/mza_2478426516827131082.jpeg/400x400bb.jpg",
        desc:"If you've ever wanted to know about champagne, satanism, the Stonewall Uprising, chaos theory, LSD, El Nino, true crime and Rosa Parks, then look no further. Josh and Chuck have you covered.",
        episodes: 2040
    },
    {
        id: 1,
        name:"I said what i said",
        imgurl:"https://source.boomplaymusic.com/group10/M00/08/03/1a2b857fa86f46e1b6e3c8b5161f4d2c_464_464.webp",
        desc:"The African millennial experience, according to FK and Jollz. Hosted on Acast. See acast.com/privacy for more information.",
        episodes: 154
    },
    {
        id: 2,
        name:"Tea with Tay",
        imgurl:"https://source.boomplaymusic.com/group10/M00/07/28/cf4285277cf543b6809ad6e3eec48093_464_464.webp",
        desc:"Tea With Tay is a sweet gist type of show hosted by Taymesan. Every week he discusses societal issues and personal experience in a fun light-hearted and entertaining way. Sometimes with your favourite celebrities, and sometimes with guest with intriguing and exceptional stories, either way Taymesan gets the tea. Tea with Tay is your perfect podcast for sweet and entertaining but serious gist. Hosted on Acast. See acast.com/privacy for more information.",
        episodes: 40
    },
    {
        id: 3,
        name:"So Nigerian",
        imgurl:"https://source.boomplaymusic.com/group10/M00/12/25/73a3978f0d45445dbbc62651355ca38e_464_464.webp",
        desc:"A podcast that talks about relatable content to an average Nigerian youth which varies from lifestyle, comedy, guy and girl code, dos and don&#39;ts, relationship thoughts, bants, unpopular opinions, morals and trends. @Damii_aros on all social media platforms @sonigerian_ on Twitter @sonigerianpodcast on InstagramEmail - SoNigerianpodcast@gmail.com",
        episodes: 65
    },
    {
        id: 4,
        name:"The most iconic rap songs",
        imgurl:"https://source.boomplaymusic.com/group10/M00/12/31/1a0dad0b92e04a5f81792357eebcd413_464_464.webp",
        desc:"Most iconic Rap songs for more clik here to listen my new playlists ➡️ https://anchor.fm/zoltan-iulian",
        episodes: 65
    }
]

export const ListenersPod: {id: number, name: string, imgurl: string, desc: string, episodes:number}[]=[
    {
        id: 0,
        name:"Tate's Speech",
        imgurl:"https://source.boomplaymusic.com/group10/M00/08/10/e59c4c3820984b238e52ecf4cdec3171_464_464.webp",
        desc:"Andrew Tate is a 4x kickboxing world champion, ultra-successful entrepreneur, and one of the most famous men on the planet. The Tate Speech podcast gives you a perspective on life from the man who is eternally correct.If you're ready to escape the matrix and connect with a global network of high caliber men, join The War Room today. https://warroom.cash/pod",
        episodes: 169
    },
    {
        id: 1,
        name:"Road to 30",
        imgurl:"https://source.boomplaymusic.com/group10/M00/09/11/f7e26a0b55944fdf93e28169cba3be9f_464_464.webp",
        desc:"This is a podcast hosted by Dolly &amp; Isaac discussing the challenges and excitements as young people on the road to 30.",
        episodes: 179
    },
    {
        id: 2,
        name:"Lowkey Relateable",
        imgurl:"https://source.boomplaymusic.com/group10/M00/08/20/b3677b1ad3d44643b3a83e1df29a45ca_464_464.webp",
        desc:"Lowkey Relatable is an Urban Popculture Podcast hosted by Tamara @taihie and Valerie @valerie.ike, two young Nigerian women talking about interesting, vulnerable and maybe sometimes embarrassing experiences that are lowkey relatable.Get ready for some drama, laughter, problems and chaos. Lowkey Relatable is a 'Madeaux Podcasts' Original!You can watch the Video Podcast on YouTube every Tuesday: https://bit.ly/3e6zh4I",
        episodes: 18
    },
    {
        id: 3,
        name:"How to be a better human",
        imgurl:"https://source.boomplaymusic.com/group10/M00/12/22/c86669fb649b4da8828d969ae8fc9ff1_464_464.webp",
        desc:"Join How to Be a Better Human as we take a look within and beyond ourselves.How to Be a Better Human isn’t your average self improvement podcast. Each week join comedian Chris Duffy in conversation with guests and past speakers as they uncover sharp insights and give clear takeaways on how YOU can be a better human.From your work to your home and your head to your heart, How to Be a Better Human looks in unexpected places for new ways to improve and show up for one another. Inspired by the popular series of the same name on TED’s Ideas blog, How to Be a Better Human will help you become a better person from the comfort of your own headphones.",
        episodes: 77
    },
    {
        id: 4,
        name:"Menisms",
        imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/bb/96/87/bb968741-9071-45d9-3dd7-e2e76e1fef0d/mza_2559822496469329991.jpg/400x400bb.jpg",
        desc:"Menisms is an Urban Popculture Podcast that deals with all things Men. African men in their most vulnerable and completely honest state. Conversations on masculinity, navigating women, emotions, behavioural characteristics and sex amongst other topics. The podcast that answers the age old question, What do men really want?!",
        episodes: 65
    }
]

export const AllPod: {id: string, name: string, imgurl: string, desc: string, episodes:number, allepisodes:{id: string, topic: string, episode: number, desc: string, date: string, length: string}[]}[]=[
    {
        id: '0',
        name:"Stuffs you should know",
        imgurl:"https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d1/29/d0/d129d0a0-5305-9125-efa3-50163912c817/mza_2478426516827131082.jpeg/400x400bb.jpg",
        desc:"If you've ever wanted to know about champagne, satanism, the Stonewall Uprising, chaos theory, LSD, El Nino, true crime and Rosa Parks, then look no further. Josh and Chuck have you covered.",
        episodes: 2040,
        allepisodes:[
            {
                id: '1',
                topic: "Interesting Origin of Everyday Phrase",
                episode: 39, 
                desc: '', 
                date:'2022-12-15', 
                length: '56:45'
            }
        ]
    },
    {
        id: '1',
        name:"I said what i said",
        imgurl:"https://source.boomplaymusic.com/group10/M00/08/03/1a2b857fa86f46e1b6e3c8b5161f4d2c_464_464.webp",
        desc:"The African millennial experience, according to FK and Jollz. Hosted on Acast. See acast.com/privacy for more information.",
        episodes: 154,
        allepisodes:[]
    },
    {
        id: '2',
        name:"Tea with Tay",
        imgurl:"https://source.boomplaymusic.com/group10/M00/07/28/cf4285277cf543b6809ad6e3eec48093_464_464.webp",
        desc:"Tea With Tay is a sweet gist type of show hosted by Taymesan. Every week he discusses societal issues and personal experience in a fun light-hearted and entertaining way. Sometimes with your favourite celebrities, and sometimes with guest with intriguing and exceptional stories, either way Taymesan gets the tea. Tea with Tay is your perfect podcast for sweet and entertaining but serious gist. Hosted on Acast. See acast.com/privacy for more information.",
        episodes: 40,
        allepisodes:[]
    },
    {
        id: '3',
        name:"So Nigerian",
        imgurl:"https://source.boomplaymusic.com/group10/M00/12/25/73a3978f0d45445dbbc62651355ca38e_464_464.webp",
        desc:"A podcast that talks about relatable content to an average Nigerian youth which varies from lifestyle, comedy, guy and girl code, dos and don&#39;ts, relationship thoughts, bants, unpopular opinions, morals and trends. @Damii_aros on all social media platforms @sonigerian_ on Twitter @sonigerianpodcast on InstagramEmail - SoNigerianpodcast@gmail.com",
        episodes: 65,
        allepisodes:[]
    },
    {
        id: '4',
        name:"The most iconic rap songs",
        imgurl:"https://source.boomplaymusic.com/group10/M00/12/31/1a0dad0b92e04a5f81792357eebcd413_464_464.webp",
        desc:"Most iconic Rap songs for more clik here to listen my new playlists ➡️ https://anchor.fm/zoltan-iulian",
        episodes: 65,
        allepisodes:[]
    },
    {
        id: '5',
        name:"Tate's Speech",
        imgurl:"https://source.boomplaymusic.com/group10/M00/08/10/e59c4c3820984b238e52ecf4cdec3171_464_464.webp",
        desc:"Andrew Tate is a 4x kickboxing world champion, ultra-successful entrepreneur, and one of the most famous men on the planet. The Tate Speech podcast gives you a perspective on life from the man who is eternally correct.If you're ready to escape the matrix and connect with a global network of high caliber men, join The War Room today. https://warroom.cash/pod",
        episodes: 169,
        allepisodes:[]
    },
    {
        id: '6',
        name:"Road to 30",
        imgurl:"https://source.boomplaymusic.com/group10/M00/09/11/f7e26a0b55944fdf93e28169cba3be9f_464_464.webp",
        desc:"This is a podcast hosted by Dolly &amp; Isaac discussing the challenges and excitements as young people on the road to 30.",
        episodes: 179,
        allepisodes:[]
    },
    {
        id: '7',
        name:"Lowkey Relateable",
        imgurl:"https://source.boomplaymusic.com/group10/M00/08/20/b3677b1ad3d44643b3a83e1df29a45ca_464_464.webp",
        desc:"Lowkey Relatable is an Urban Popculture Podcast hosted by Tamara @taihie and Valerie @valerie.ike, two young Nigerian women talking about interesting, vulnerable and maybe sometimes embarrassing experiences that are lowkey relatable.Get ready for some drama, laughter, problems and chaos. Lowkey Relatable is a 'Madeaux Podcasts' Original!You can watch the Video Podcast on YouTube every Tuesday: https://bit.ly/3e6zh4I",
        episodes: 18,
        allepisodes:[]
    },
    {
        id: '8',
        name:"How to be a better human",
        imgurl:"https://source.boomplaymusic.com/group10/M00/12/22/c86669fb649b4da8828d969ae8fc9ff1_464_464.webp",
        desc:"Join How to Be a Better Human as we take a look within and beyond ourselves.How to Be a Better Human isn’t your average self improvement podcast. Each week join comedian Chris Duffy in conversation with guests and past speakers as they uncover sharp insights and give clear takeaways on how YOU can be a better human.From your work to your home and your head to your heart, How to Be a Better Human looks in unexpected places for new ways to improve and show up for one another. Inspired by the popular series of the same name on TED’s Ideas blog, How to Be a Better Human will help you become a better person from the comfort of your own headphones.",
        episodes: 77,
        allepisodes:[]

    },
    {
        id: '9',
        name:"Menisms",
        imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/bb/96/87/bb968741-9071-45d9-3dd7-e2e76e1fef0d/mza_2559822496469329991.jpg/400x400bb.jpg",
        desc:"Menisms is an Urban Popculture Podcast that deals with all things Men. African men in their most vulnerable and completely honest state. Conversations on masculinity, navigating women, emotions, behavioural characteristics and sex amongst other topics. The podcast that answers the age old question, What do men really want?!",
        episodes: 65,
        allepisodes:[
            {
                id: '1',
                topic: "Interesting Origin of Everyday Phrase",
                episode: 39, 
                desc: '', 
                date:'2022-12-15', 
                length: '56:45'
            }
        ]
    }
]