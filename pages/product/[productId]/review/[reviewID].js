import { useRouter } from "next/router"

function Review() {

    const router = useRouter();
    const {productId, reviewID} = router.query;

    return (
      <div>
        <h1>Review {reviewID} for product {productId}</h1>
      </div>
    )
  }
  
  export default Review
  