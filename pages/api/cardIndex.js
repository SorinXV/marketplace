// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const cards = [
  {
       title : "Sofa",
       imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
       description:"This is an amazing sofa feels nice for arse ohmagah ye s  jg web fwebf kjaeb frkjabe kfjjberkjbg kjajebkgjberkjagb kjar;b gkjbarjgkbkjaer gkjbakjgbkjrebgkjjrbWJKBGKJBG jbgkjkb",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
       title : "tractor",
       imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
       description:"This is an amazing sofa feels nice for arse ohmagah ye s  jg web fwebf kjaeb frkjabe kfjjberkjbg kjajebkgjberkjagb kjar;b gkjbarjgkbkjaer gkjbakjgbkjrebgkjjrbWJKBGKJBG jbgkjkb",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
       title : "lean",
       imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
       description:"This is an amazing sofa feels nice for arse ohmagah ye s  jg web fwebf kjaeb frkjabe kfjjberkjbg kjajebkgjberkjagb kjar;b gkjbarjgkbkjaer gkjbakjgbkjrebgkjjrbWJKBGKJBG jbgkjkb",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
       title : "buffa",
       imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
       description:"This is an amazing sofa feels nice for arse ohmagah ye s  jg web fwebf kjaeb frkjabe kfjjberkjbg kjajebkgjberkjagb kjar;b gkjbarjgkbkjaer gkjbakjgbkjrebgkjjrbWJKBGKJBG jbgkjkb",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
       title : "deez nuts",
       imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
       description:"This is an amazing sofa feels nice for arse ohmagah ye s  jg web fwebf kjaeb frkjabe kfjjberkjbg kjajebkgjberkjagb kjar;b gkjbarjgkbkjaer gkjbakjgbkjrebgkjjrbWJKBGKJBG jbgkjkb",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
  {
       title : "fo sho",
       imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
       description:"This is an amazing sofa feels nice for arse ohmagah ye s  jg web fwebf kjaeb frkjabe kfjjberkjbg kjajebkgjberkjagb kjar;b gkjbarjgkbkjaer gkjbakjgbkjrebgkjjrbWJKBGKJBG jbgkjkb",
       retailer_name : "draymond",
       retailer_contact: "9875869594"
  },
]


export default function handler(req, res) {
  res.status(200).json(cards)
  
}
