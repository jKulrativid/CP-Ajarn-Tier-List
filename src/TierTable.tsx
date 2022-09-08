import { AjarnView } from "./Ajarn";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemType";
import "./TierTable.css";
import { Ajarn, demoAjarnList } from "./AjarnArchive"
import {useState } from "react";
import { Button } from "@mui/material";



let colors: Map<string, string> = new Map([
  ["S", "Crimson"],
  ["A", "Coral"],
  ["B", "Chartreuse"],
  ["C", "LightGreen"],
  ["D", "LightBlue"],
  ["F", "LightPink"],
]);

function TierRowView({ tier }: { tier: string }) {
  const [ajarnList, setAjarnList] = useState<Ajarn[]>(
    demoAjarnList.get(tier) || []
  );

  const [_, drop] = useDrop(
    () => ({
      accept: ItemTypes.AJARN,
      canDrop: (item: Ajarn, _) => isAjarnNotInRow(item),
      hover: (item: Ajarn, _): void => {
        console.log(item);
      },
      drop: (item: Ajarn, _): void => {
        console.log(item);
        addNewAjarn(item);
      },
    }),
    [ajarnList]
  );

  function isAjarnNotInRow(ajarn: Ajarn): boolean {
    return (
      -1 ===
      ajarnList.findIndex((elem: Ajarn, _): boolean => elem.name === ajarn.name)
    );
  }

  function addNewAjarn(newAjarn: Ajarn): void {
    setAjarnList((prev: Ajarn[]) => [...prev, newAjarn]);
  }

  function removeAjarn(target: Ajarn) {
    setAjarnList((prev: Ajarn[]) =>
      prev.filter((elem: Ajarn) => elem.name !== target.name)
    );
  }

  return (
    <div className="row">
      <div className="label" style={{ background: colors.get(tier) }}>
        {tier}
      </div>
      <div className="container" ref={drop}>
        {ajarnList.map((ajarn: Ajarn) => (
          <AjarnView
            name={ajarn.name}
            imageUrl={ajarn.imageUrl}
            onDidDrop={() => {
              removeAjarn(ajarn);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function TierTableView() {
  const tiers: string[] = ["S", "A", "B", "C", "D", "F"];
  return (
    <div className="table">
      {tiers.map((tier) => (
        <TierRowView tier={tier} />
      ))}
    </div>
  );
}
