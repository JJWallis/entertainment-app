export interface Film {
   title: string
   thumbnail: {
      trending: {
         small: string
         large: string
      }
      regular: {
         small: string
         medium: string
         large: string
      }
   }
   year: string
   category: string
   rating: string
   isBookmarked: boolean
   isTrending: boolean
}

interface Thumbnail {}
