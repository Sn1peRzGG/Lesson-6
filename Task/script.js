const container = document.querySelector('.container')

const M1A2 = {
	name: 'M1A2 SEP V2',
	country: 'USA',
	rank: 'VIII',
	battleRating: 11.7,
	type: 'Medium tank',
	researchCost: 410_000,
	purchaseCost: 1_100_000,
	armour: {
		hull: { front: 133, side: 60, rear: 32 },
		turret: { front: 139, side: 120, rear: 13 },
		crewSize: 4,
	},
	mobility: {
		speed: {
			AB: { forward: 76, backward: 43 },
			RB_SB: { forward: 69, backward: 39 },
		},
	},
	armaments: {
		mainGun: {
			type: '120 mm M256 cannon',
			ammunitionCount: 42,
			reloadTime: { basicCrew: 6.5, aces: 5.0 },
		},
	},
}

const dataDiv = document.createElement('div')
dataDiv.classList.add('tank-info')
container.appendChild(dataDiv)

dataDiv.innerHTML = `
    <h2>${M1A2.name}</h2>
		<img src="./img/m1a2_sep2_abrams.jpg" alt="Tank Image"  class="tank-image">
    <p><b>Country:</b> ${M1A2.country}</p>
    <p><b>Rank:</b> ${M1A2.rank}</p>
    <p><b>Battle Rating:</b> ${M1A2.battleRating}</p>
    <p><b>Type:</b> ${M1A2.type}</p>
    <p><b>Research Cost:</b> ${M1A2.researchCost}</p>
    <p><b>Purchase Cost:</b> ${M1A2.purchaseCost}</p>
    <h3>Armour</h3>
    <p><b>Hull Armour:</b> Front: ${M1A2.armour.hull.front}, Side: ${M1A2.armour.hull.side}, Rear: ${M1A2.armour.hull.rear}</p>
    <p><b>Turret Armour:</b> Front: ${M1A2.armour.turret.front}, Side: ${M1A2.armour.turret.side}, Rear: ${M1A2.armour.turret.rear}</p>
    <p><b>Crew Size:</b> ${M1A2.armour.crewSize}</p>
    <h3>Mobility</h3>
    <p><b>Speed (AB):</b> Forward: ${M1A2.mobility.speed.AB.forward}, Backward: ${M1A2.mobility.speed.AB.backward}</p>
    <p><b>Speed (RB/SB):</b> Forward: ${M1A2.mobility.speed.RB_SB.forward}, Backward: ${M1A2.mobility.speed.RB_SB.backward}</p>
    <h3>Armaments</h3>
    <p><b>Main Gun Type:</b> ${M1A2.armaments.mainGun.type}</p>
    <p><b>Ammunition Count:</b> ${M1A2.armaments.mainGun.ammunitionCount}</p>
    <p><b>Reload Time (Basic Crew):</b> ${M1A2.armaments.mainGun.reloadTime.basicCrew}</p>
    <p><b>Reload Time (Aces):</b> ${M1A2.armaments.mainGun.reloadTime.aces}</p>
`
