import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  if (props["nutritional-label"] == null) return null;
  
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props["nutritional-label"].item_name}</h4>

      <ul className="fact-list">
          <NutritionalLabelFact nutrition-fact={props["nutritional-label"].protein} fact-label={"protein"} fact-value={props["nutritional-label"].protein}/>
          <NutritionalLabelFact nutrition-fact={props["nutritional-label"].saturated_fat} fact-label={"saturated fat"} fact-value={props["nutritional-label"].saturated_fat}/>
          <NutritionalLabelFact nutrition-fact={props["nutritional-label"].sodium} fact-label={"sodium"} fact-value={props["nutritional-label"].sodium}/>
          <NutritionalLabelFact nutrition-fact={props["nutritional-label"].sugar} fact-label={"sugar"} fact-value={props["nutritional-label"].sugar}/>
          <NutritionalLabelFact nutrition-fact={props["nutritional-label"].total_fat} fact-label={"total fat"} fact-value={props["nutritional-label"].total_fat}/>
          <NutritionalLabelFact nutrition-fact={props["nutritional-label"].total_fat} fact-label={"total fat"} fact-value={props["nutritional-label"].total_fat}/>
          <NutritionalLabelFact nutrition-fact={props["nutritional-label"].serving_size} fact-label={"serving size"} fact-value={props["nutritional-label"].serving_size}/>
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  console.log(props);
  if (props["nutritonal-fact"] == null) return null;

  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props["nutritonal-fact"]["fact-label"]}</span>{" "}
      <span className="fact-value">{props["nutritonal-fact"]["fact-value"]}</span>
    </li>
  )
}

export default NutritionalLabel
