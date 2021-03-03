import { handleSubmit } from './js/formHandler';
import { showResults, checkForName } from './js/nameChecker';
import {numberOfDaysAway} from './js/daysAway';
import {addFlightForm} from './js/addFlightForm';
import {removeTripForm} from './js/removeTripForm';
import {addItineraryTable} from './js/addItineraryTable';
import {addToDoListForm} from './js/addToDoListForm';
import {addTodoListItems} from './js/addTodoListItems';

import './styles/cssIndexChapterBox.scss'
import './styles/cssIndexPage.scss'
import './styles/cssHeaderBox.scss'
import './styles/cssFooterBox.scss'
import './styles/cssMainPageStructure.scss'
import './styles/cssImg.scss'
import './styles/cssFlightForm.scss'
import './styles/cssTodoListForm.scss'
import './styles/cssItineraryTable.scss'

export{
    handleSubmit,
    checkForName,
    showResults,
    numberOfDaysAway,
    addFlightForm,
    removeTripForm,
    addItineraryTable,
    addToDoListForm,
    addTodoListItems
}