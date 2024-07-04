import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Rating } from "primereact/rating";
import chapati from "../../../Assets/chapati.jpg";
import styles from "./DialogPopUp.module.scss";
import { useState } from "react";

export default function DialogPopUp(props: any) {
  const { visible, onHide, selectedItem } = props;

  const [qty, setQty] = useState(0);
  const footerContent = (
    <div>
      <Button
        label="Add to Cart"
        icon="pi pi-cart-arrow-down"
        onClick={onHide}
        className="p-button-text"
      />
      <Button
        label="Checkout"
        icon="pi pi-list-check"
        onClick={onHide}
        autoFocus
      />
    </div>
  );

  const handleIncrement = () => {
    setQty((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (qty > 0) setQty((prev) => prev - 1);
  };
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={""}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={onHide}
        footer={footerContent}
      >
        <p className="m-0">
          <div className="grid w-full">
            <div className="col-6">
              <img
                src={chapati}
                alt={selectedItem?.name}
                className={`${styles["responsiveImg"]}`}
              />
            </div>
            <div className="col-6">
              <p className="text-xl font-bold uppercase">
                {selectedItem?.name}
              </p>
              <Rating value={selectedItem?.rating} readOnly cancel={false} />
              <p className="font-bold"> Price: {selectedItem?.price}</p>
              <p className="font-italic">{selectedItem?.description}</p>
              <p>Availability : {selectedItem?.statusAvailability}</p>
              <span className="flex flex-wrap gap-2 align-items-center">
                Quantity:
                <Button
                  icon="pi pi-plus"
                  className="h-2rem w-2rem"
                  onClick={handleIncrement}
                />
                <p className="text-xl">{qty}</p>
                <Button
                  icon="pi pi-minus"
                  className="h-2rem w-2rem"
                  onClick={handleDecrement}
                />
              </span>
            </div>
          </div>
        </p>
      </Dialog>
    </div>
  );
}
