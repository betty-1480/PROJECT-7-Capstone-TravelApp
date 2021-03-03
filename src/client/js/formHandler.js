import {updateUI} from "./updateUI"
function handleSubmit(event) {
    event.preventDefault()
    updateUI()
   // removeTripForm()
}

export { handleSubmit }
