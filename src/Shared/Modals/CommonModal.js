import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function CommonModal(title, text, icon, showConfirmButton, showCancelButton, navigate){
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showConfirmButton: showConfirmButton,
        showCancelButton: showCancelButton
    }).then((result) => {
        if(result.isConfirmed){
            navigate('/admin/course');
        }
    });
}