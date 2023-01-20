import React, { useState } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";

const HotelUpdate = ({ hotel, setsetShowInps }) => {
  const { updateHotel, getHotel } = useServices();
  const [editedHotel, setEditedHotel] = useState({
    ...hotel,
  });

  function handleSave() {
    updateHotel(editedHotel);
    setShowInps(false);
    window.location.reload();
  }

  return (
    <div>
      <input
        type="text"
        value={editedHotel.name}
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, name: e.target.value })
        }
      />
      <input
        type="text"
        value={editedHotel.image}
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, image: e.target.value })
        }
      />
      <input
        type="text"
        value={editedHotel.class}
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, class: e.target.value })
        }
      />
      <button onClick={handleSave}>SAVE</button>
    </div>
  );
};

export default HotelUpdate;

// const UpdateDuck = ({ duck, setShowInps }) => {
//     const { updateOneDuck, getOneDuck } = useDucks();
//   const [editedDuck, setEditedDuck] = useState({
//     ...duck,
//   });

//   function handleSave() {
//     updateOneDuck(editedDuck);
//     setShowInps(false);
//     window.location.reload();
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={editedDuck.name}
//         onChange={(e) => setEditedDuck({ ...editedDuck, name: e.target.value })}
//       />
//       <input
//         type="text"
//         value={editedDuck.image}
//         onChange={(e) =>
//           setEditedDuck({ ...editedDuck, image: e.target.value })
//         }
//       />
//       <input
//         type="text"
//         value={editedDuck.class}
//         onChange={(e) =>
//           setEditedDuck({ ...editedDuck, class: e.target.value })
//         }
//       />
//       <button onClick={handleSave}>SAVE</button>
//     </div>
//   );
