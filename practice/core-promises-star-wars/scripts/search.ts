import { starWars } from "../lib/star-wars.js";

document.getElementById('byQueryBtn')?.addEventListener('click', async function () {
    const query = (document.getElementById('byQueryInput') as HTMLInputElement).value;
    const resourceSelect = (document.getElementById('byQueryResourceSelect') as HTMLSelectElement).value;
    const resultContainer = document.getElementById('content') as HTMLElement;
    const resultBlock = document.getElementById('result-container') as HTMLElement;
    const spinner = document.querySelector('.spinner') as HTMLElement;

    resultContainer.innerHTML = '';
    spinner.style.visibility = 'visible';

    let data: { results: ICharacter[] | IPlanet[] | ISpecies[] } | null = null;

    interface ICharacter {
        name: string;
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        homeworld: string;
        species: string[];
        films: string[];
        created: string;
        edited: string;
    }

    interface IPlanet {
        name: string;
        rotation_period: string;
        orbital_period: string;
        diameter: string;
        climate: string;
        gravity: string;
        terrain: string;
        population: string;
        films: string[];
    }

    interface ISpecies {
        name: string;
        classification: string;
        designation: string;
        average_height: string;
        skin_colors: string;
        hair_colors: string;
        eye_colors: string;
        average_lifespan: string;
        language: string;
        homeworld: string | null;
    }

    try {
        if (resourceSelect === 'characters') {
            data = await starWars.searchCharacters(query);
        } else if (resourceSelect === 'planets') {
            data = await starWars.searchPlanets(query);
        } else if (resourceSelect === 'species') {
            data = await starWars.searchSpecies(query);
        }

        spinner.style.visibility = 'hidden';

        if (data.results.length > 0) {
            resultBlock.style.visibility = 'visible';
            resultBlock.style.zIndex = '10';

            if (resourceSelect === 'characters') {
                for (const character of data.results as ICharacter[]) {
                    const planetId = character.homeworld.split('/').filter(Boolean).pop();
                    try {
                        const planetData: IPlanet = await starWars.getPlanetsById(planetId);
                        const planetName = planetData.name;
                        const characterInfo = `
                            <p><strong>Name:</strong> ${character.name}</p>
                            <p><strong>Height:</strong> ${character.height}</p>
                            <p><strong>Mass:</strong> ${character.mass}</p>
                            <p><strong>Hair Color:</strong> ${character.hair_color}</p>
                            <p><strong>Skin Color:</strong> ${character.skin_color}</p>
                            <p><strong>Eye Color:</strong> ${character.eye_color}</p>
                            <p><strong>Birth Year:</strong> ${character.birth_year}</p>
                            <p><strong>Gender:</strong> ${character.gender}</p>
                            <p><strong>Homeworld:</strong> ${planetName}</p>
                            <p><strong>Species:</strong> ${character.species.length > 0 ? `<a href="${character.species[0]}">View Species</a>` : 'Unknown'}</p>
                            <p><strong>Films:</strong></p>
                            <ul>
                                ${character.films.map((film: string) => `<li><a href="${film}">View Film</a></li>`).join('')}
                            </ul>
                            <p><strong>Created:</strong> ${new Date(character.created).toLocaleDateString()}</p>
                            <p><strong>Edited:</strong> ${new Date(character.edited).toLocaleDateString()}</p>
                        `;
                        resultContainer.innerHTML += characterInfo;
                    } catch (err) {
                        console.error('Ошибка при получении информации о планете: ', err);
                        resultContainer.innerHTML += `<p>Error fetching planet data for ${character.name}</p>`;
                    }
                }
            } else if (resourceSelect === 'planets') {
                for (const planet of data.results as IPlanet[]) {
                    const planetInfo = `
                        <p><strong>Name:</strong> ${planet.name}</p>
                        <p><strong>Rotation Period:</strong> ${planet.rotation_period}</p>
                        <p><strong>Orbital Period:</strong> ${planet.orbital_period}</p>
                        <p><strong>Diameter:</strong> ${planet.diameter}</p>
                        <p><strong>Climate:</strong> ${planet.climate}</p>
                        <p><strong>Gravity:</strong> ${planet.gravity}</p>
                        <p><strong>Terrain:</strong> ${planet.terrain}</p>
                        <p><strong>Population:</strong> ${planet.population}</p>
                        <p><strong>Films:</strong></p>
                        <ul>
                            ${planet.films.map((film: string) => `<li><a href="${film}">View Film</a></li>`).join('')}
                        </ul>
                    `;
                    resultContainer.innerHTML += planetInfo;
                }
            } else if (resourceSelect === 'species') {
                for (const species of data.results as ISpecies[]) {
                    const speciesInfo = `
                        <p><strong>Name:</strong> ${species.name}</p>
                        <p><strong>Classification:</strong> ${species.classification}</p>
                        <p><strong>Designation:</strong> ${species.designation}</p>
                        <p><strong>Average Height:</strong> ${species.average_height}</p>
                        <p><strong>Skin Colors:</strong> ${species.skin_colors}</p>
                        <p><strong>Hair Colors:</strong> ${species.hair_colors}</p>
                        <p><strong>Eye Colors:</strong> ${species.eye_colors}</p>
                        <p><strong>Average Lifespan:</strong> ${species.average_lifespan}</p>
                        <p><strong>Language:</strong> ${species.language}</p>
                        <p><strong>Homeworld:</strong> ${species.homeworld ? `<a href="${species.homeworld}">View Homeworld</a>` : 'Unknown'}</p>
                    `;
                    resultContainer.innerHTML += speciesInfo;
                }
            }
        } else {
            resultContainer.innerHTML = '<p>No results found.</p>';
            resultBlock.style.visibility = 'visible';
        }
    } catch (err) {
        console.error('Ошибка при поиске: ', err);
        resultContainer.innerHTML = '<p>Error occurred while fetching data.</p>';
        resultBlock.style.visibility = 'visible';
        spinner.style.visibility = 'hidden';
    }
});
