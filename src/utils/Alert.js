import Swal from "sweetalert2";

export const fireAlert = (title,text,icon,confirmButtonText)=>{
    Swal.fire({
        title: title,
        text: text,
        icon: icon,//success
        confirmButtonText: confirmButtonText
      })
}

