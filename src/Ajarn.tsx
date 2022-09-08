import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemType";
import "./Ajarn.css";

export function AjarnView(props: {
  name: string;
  imageUrl: string;
  onDidDrop: () => void;
}) {
  const [{ isDragging }, drag, _] = useDrag(
    () => ({
      type: ItemTypes.AJARN,
      item: { name: props.name, imageUrl: props.imageUrl },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      end(_, monitor) {
        if (monitor.didDrop()) {
          props.onDidDrop();
        }
      },
    }),
    [props]
  );

  return isDragging ? null : (
    <div className="block" ref={drag}>
      <img className="image" src={props.imageUrl}></img>
    </div>
  );
}
