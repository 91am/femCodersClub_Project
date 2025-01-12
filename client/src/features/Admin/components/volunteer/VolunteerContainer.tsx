import AdminModal from "../AdminModal"
import { AddVolunteerForm } from "./AddVolunteerForm"
import CardVolunteer from "./CardVolunteer"

const VolunteerContainer = () => {
  return (
    <div>
      <div className="flex items-end flex-col w-full mb-5">
        <AdminModal 
            text = 'Agregar'
            width = '120px'
            bg = 'tertiary'
            children={<AddVolunteerForm/>}
        />
      </div>
      <CardVolunteer/>
    </div>
  )
}

export default VolunteerContainer;