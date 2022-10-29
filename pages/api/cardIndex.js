// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const cards = [
  {
       title : "Sofa",
       imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
       description:"a long upholstered seat with a back and arms, for two or more people.You can drink lean an what not on it our sponsor for lean is sorinXV who is 15 years old period",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
       title : "tractor",
       imageUrl: "https://thumbs.dreamstime.com/b/large-john-deere-tractor-farm-38115205.jpg",
       description:"A tractor is an engineering vehicle specifically designed to deliver a high tractive effort at slow speeds, for the purposes of hauling a trailer or machinery such as that used in agriculture, mining or construction",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
       title : "tractor",
       imageUrl: "https://thumbs.dreamstime.com/b/large-john-deere-tractor-farm-38115205.jpg",
       description:"A tractor is an engineering vehicle specifically designed to deliver a high tractive effort at slow speeds, for the purposes of hauling a trailer or machinery such as that used in agriculture, mining or construction",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
       title : "tractor",
       imageUrl: "https://thumbs.dreamstime.com/b/large-john-deere-tractor-farm-38115205.jpg",
       description:"A tractor is an engineering vehicle specifically designed to deliver a high tractive effort at slow speeds, for the purposes of hauling a trailer or machinery such as that used in agriculture, mining or construction",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
     title : "Sofa",
     imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     description:"A long upholstered seat with a back and arms, for two or more people.You can drink lean an what not on it our sponsor for lean is sorinXV who is 15 years old period",
     retailer_name : "draymond",
     retailer_contact: "9875869594"
},
{
     title : "Sofa",
     imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     description:"a long upholstered seat with a back and arms, for two or more people.You can drink lean an what not on it our sponsor for lean is sorinXV who is 15 years old period",
     retailer_name : "draymond",
     retailer_contact: "9875869594"
},

]


export default function handler(req, res) {
  res.status(200).json(cards)
  
}
