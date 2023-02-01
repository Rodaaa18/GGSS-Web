import React from "react";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
// import { InputText } from 'primereact/inputtext';
import { Avatar } from "react-avatar-edit";
import perfil4 from "../../images/perfil4.jpg";

const Prueba = () => {
  const [dialogs, setDialogs] = useState(false);
  const [imageCrop, setImageCrop] = useState(false);
  const [storeImage, setStoreImage] = useState([]);

  const onCrop = (view) => {
    setImageCrop(view);
  };

  const onClose = () => {
    setImageCrop(null);
  };

  const saveImage = () => {
    setStoreImage([...storeImage, { imageCrop }]);
    setDialogs(false);
  };

  const profileImageShow = storeImage.map((item) => item.imageCrop);

  return (
    <>
      <div className="profile_img text-center p-4">
        <div className="div">
          <img
            style={{
              with: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid red",
            }}
            src={profileImageShow.length ? profileImageShow : perfil4}
            alt=""
            onClick={() => setDialogs(true)}
          />
          <div>
          <Dialog
            visible={dialogs}
            header={() => (
              <p htmlFor="" className="text-2x1 font-semibold textColor">
                Cambie su imagen
              </p>
            )}
            onHide={() => setDialogs(false)}
          >
            <div className="confirmation-content flex flex-column align-items-center">
              <div className="flex flex-column align-items-center mt-5 w-12">
                <div className="flex justify-content-around w-12 mt-4">
                  <Avatar
                    with={500}
                    height={400}
                    onClose={onClose}
                    onCrop={onCrop}
                  />
                  <Button onClick={saveImage} label="Save" icon="pi pi-check" />
                </div>
              </div>
            </div>
          </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};
export default Prueba;
