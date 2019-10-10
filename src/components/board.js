//Board
import React from 'react'
import NewSquare from './square'
const RenderBoard = (props) => {
	let inputValues = {
		...props.inputValues
	}
	//needs props: inputValue(user input) fields(gamefield) deletevalue()(delete a given value) handleuserinput(handle input & send to srv)
	//player(is the user a player or spectator?) opponent(are we rendering the opponent board?) opponentValues(user input of opponent)
	//renderBoard is responsible to draw the playfield
	let rows = []
	let size = 9
	for (let i = 0; i < size; i++) {
		let rowID = `row${i}`
		let square = []
		for (let id = 0; id < size; id++) {
			let cellID = `cell${i}${id}`
			let cellVal = props.fields[i][id]
			square.push(
				<NewSquare
					deleteValue={() => props.deleteValue(cellID)}
					handleUserInput={(e) => props.handleUserInput(e, cellID)}
					opponent={props.opponent}
					opponentValues={
						props.opponentFields && props.opponentFields[cellID]
					}
					inputValue={
						inputValues &&
						Object.keys(inputValues).length > 0 &&
						inputValues[cellID] !== 0 &&
						inputValues[cellID]
							? inputValues[cellID]
							: ''
					}
					key={cellID}
					value={cellVal}
					player={props.player}
					shake={props.shake}
				/>
			)
		}
		rows.push(
			<div key={rowID} className="row">
				{square}
			</div>
		)
	}
	return <div>{rows}</div>
}
export default RenderBoard