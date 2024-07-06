import { useEffect, useState } from "react"
export const TableSay = [
  {
    keyID: 1,
    td1: 'Guy Hawkins',
    td2: 'Lifestyle',
    td3: 'Ugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
    td4: '08-Dec, 2021',
    ViewURL : 'dashstdsay/show/:id',
    editURL : 'dashstdsay/edit/:id'
  },
  {
    keyID: 2,
    td1: 'Jane Cooper',
    td2: 'Write',
    td3: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
    td4: '08-Dec, 2021',
    ViewURL : 'dashstdsay/show/:id',
    editURL : 'dashstdsay/edit/:id'
  }
]


export const TableArticle = [
  {
    keyID: 1,
    td1: '10 updated Figma features in 2022',
    td2: 'UX/UI Design',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 1.png',
    read:'3 min read',
  },
  {
    keyID: 2,
    td1: 'What new programming languages are in demand now?',
    td2: 'Programming ',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 2.png',
    read:'5 min read',
  },
  {
    keyID: 3,
    td1: 'Top popular styles in illustration 2022',
    td2: 'Illustration',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 3.png',
    read:'7 min read',
  },
  {
    keyID: 4,
    td1: 'The secret of a successful frame. What rules should be followed?',
    td2: 'Photo & Film',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 4.png',
    read:'6 min read',
  },
  {
    keyID: 5,
    td1: 'Brainstorming in design: from the idea to its implementation',
    td2: 'UX/UI Design',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 5.png',
    read:'12 min read',
  },
  {
    keyID: 6,
    td1: 'Who is an Internet marketer and what does he do?',
    td2: 'Marketing',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 6.png',
    read:'5 min read',
  },
  {
    keyID: 7,
    td1: 'Who is an Internet marketer and what does he do?',
    td2: 'Marketing',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 1.png',
    read:'5 min read',
  },
  {
    keyID: 8,
    td1: 'Who is an Internet marketer and what does he do?',
    td2: 'Marketing',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 4.png',
    read:'5 min read',
  },
  {
    keyID: 9,
    td1: 'Who is an Internet marketer and what does he do?',
    td2: 'Marketing',
    td3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
    td4: '08-Dec, 2021',
    ViewURL : 'show/:id',
    editURL : 'edit/:id',
    delete: 'DashArticle',
    imageUrl: './image/BlogImg/blog images/article 5.png',
    read:'5 min read',
  },
]

export default function CrudData() {
  const [jsonTableSay] = useState(TableSay)
  const [jsonTableArticle] = useState(TableArticle)

  useEffect(() => {
    localStorage.setItem('tableSay', JSON.stringify(jsonTableSay))
  }, [jsonTableSay])

  useEffect(() => {
    localStorage.setItem('tableArticle', JSON.stringify(jsonTableArticle))
  }, [jsonTableArticle])
}