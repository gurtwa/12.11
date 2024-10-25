var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById('byQueryBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    return __awaiter(this, void 0, void 0, function () {
        var query, resourceSelect, resultContainer, resultBlock, spinner, data, _i, _a, character, planetId, planetData, planetName, characterInfo, err_1, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    query = document.getElementById('byQueryInput').value;
                    resourceSelect = document.getElementById('byQueryResourceSelect').value;
                    resultContainer = document.getElementById('content');
                    resultBlock = document.getElementById('result-container');
                    spinner = document.querySelector('.spinner');
                    // Очистка контейнера результатов и показ спиннера
                    resultContainer.innerHTML = '';
                    spinner.style.visibility = 'visible';
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 18, , 19]);
                    if (!(resourceSelect === 'characters')) return [3 /*break*/, 3];
                    return [4 /*yield*/, starWars.searchCharacters(query)];
                case 2:
                    data = _b.sent();
                    return [3 /*break*/, 7];
                case 3:
                    if (!(resourceSelect === 'planets')) return [3 /*break*/, 5];
                    return [4 /*yield*/, starWars.searchPlanets(query)];
                case 4:
                    data = _b.sent();
                    return [3 /*break*/, 7];
                case 5:
                    if (!(resourceSelect === 'species')) return [3 /*break*/, 7];
                    return [4 /*yield*/, starWars.searchSpecies(query)];
                case 6:
                    data = _b.sent();
                    _b.label = 7;
                case 7:
                    // Скрытие спиннера
                    spinner.style.visibility = 'hidden';
                    if (!(data.results.length > 0)) return [3 /*break*/, 16];
                    resultBlock.style.visibility = 'visible';
                    resultBlock.style.zIndex = '10';
                    if (!(resourceSelect === 'characters')) return [3 /*break*/, 14];
                    _i = 0, _a = data.results;
                    _b.label = 8;
                case 8:
                    if (!(_i < _a.length)) return [3 /*break*/, 13];
                    character = _a[_i];
                    planetId = character.homeworld.split('/').filter(Boolean).pop();
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, starWars.getPlanetsById(planetId)];
                case 10:
                    planetData = _b.sent();
                    planetName = planetData.name;
                    characterInfo = "\n                            <p><strong>Name:</strong> ".concat(character.name, "</p>\n                            <p><strong>Height:</strong> ").concat(character.height, "</p>\n                            <p><strong>Mass:</strong> ").concat(character.mass, "</p>\n                            <p><strong>Hair Color:</strong> ").concat(character.hair_color, "</p>\n                            <p><strong>Skin Color:</strong> ").concat(character.skin_color, "</p>\n                            <p><strong>Eye Color:</strong> ").concat(character.eye_color, "</p>\n                            <p><strong>Birth Year:</strong> ").concat(character.birth_year, "</p>\n                            <p><strong>Gender:</strong> ").concat(character.gender, "</p>\n                            <p><strong>Homeworld:</strong> ").concat(planetName, "</p>\n                            <p><strong>Species:</strong> ").concat(character.species.length > 0 ? "<a href=\"".concat(character.species[0], "\">View Species</a>") : 'Unknown', "</p>\n                            <p><strong>Films:</strong></p>\n                            <ul>\n                                ").concat(character.films.map(function (film) { return "<li><a href=\"".concat(film, "\">View Film</a></li>"); }).join(''), "\n                            </ul>\n                            <p><strong>Created:</strong> ").concat(new Date(character.created).toLocaleDateString(), "</p>\n                            <p><strong>Edited:</strong> ").concat(new Date(character.edited).toLocaleDateString(), "</p>\n                        ");
                    resultContainer.innerHTML += characterInfo;
                    return [3 /*break*/, 12];
                case 11:
                    err_1 = _b.sent();
                    console.error('Ошибка при получении информации о планете: ', err_1);
                    resultContainer.innerHTML += "<p>Error fetching planet data for ".concat(character.name, "</p>");
                    return [3 /*break*/, 12];
                case 12:
                    _i++;
                    return [3 /*break*/, 8];
                case 13: return [3 /*break*/, 15];
                case 14:
                    if (resourceSelect === 'planets') {
                        data.results.forEach(function (planet) {
                            var planetInfo = "\n                        <p><strong>Name:</strong> ".concat(planet.name, "</p>\n                        <p><strong>Rotation Period:</strong> ").concat(planet.rotation_period, "</p>\n                        <p><strong>Orbital Period:</strong> ").concat(planet.orbital_period, "</p>\n                        <p><strong>Diameter:</strong> ").concat(planet.diameter, "</p>\n                        <p><strong>Climate:</strong> ").concat(planet.climate, "</p>\n                        <p><strong>Gravity:</strong> ").concat(planet.gravity, "</p>\n                        <p><strong>Terrain:</strong> ").concat(planet.terrain, "</p>\n                        <p><strong>Population:</strong> ").concat(planet.population, "</p>\n                        <p><strong>Films:</strong></p>\n                        <ul>\n                            ").concat(planet.films.map(function (film) { return "<li><a href=\"".concat(film, "\">View Film</a></li>"); }).join(''), "\n                        </ul>\n                    ");
                            resultContainer.innerHTML += planetInfo;
                        });
                    }
                    // Обработка видов
                    else if (resourceSelect === 'species') {
                        data.results.forEach(function (species) {
                            var speciesInfo = "\n                        <p><strong>Name:</strong> ".concat(species.name, "</p>\n                        <p><strong>Classification:</strong> ").concat(species.classification, "</p>\n                        <p><strong>Designation:</strong> ").concat(species.designation, "</p>\n                        <p><strong>Average Height:</strong> ").concat(species.average_height, "</p>\n                        <p><strong>Skin Colors:</strong> ").concat(species.skin_colors, "</p>\n                        <p><strong>Hair Colors:</strong> ").concat(species.hair_colors, "</p>\n                        <p><strong>Eye Colors:</strong> ").concat(species.eye_colors, "</p>\n                        <p><strong>Average Lifespan:</strong> ").concat(species.average_lifespan, "</p>\n                        <p><strong>Language:</strong> ").concat(species.language, "</p>\n                        <p><strong>Homeworld:</strong> ").concat(species.homeworld ? "<a href=\"".concat(species.homeworld, "\">View Homeworld</a>") : 'Unknown', "</p>\n                    ");
                            resultContainer.innerHTML += speciesInfo;
                        });
                    }
                    _b.label = 15;
                case 15: return [3 /*break*/, 17];
                case 16:
                    resultContainer.innerHTML = '<p>No results found.</p>';
                    resultBlock.style.visibility = 'visible';
                    _b.label = 17;
                case 17: return [3 /*break*/, 19];
                case 18:
                    err_2 = _b.sent();
                    console.error('Ошибка при поиске: ', err_2);
                    resultContainer.innerHTML = '<p>Error occurred while fetching data.</p>';
                    resultBlock.style.visibility = 'visible';
                    spinner.style.visibility = 'hidden';
                    return [3 /*break*/, 19];
                case 19: return [2 /*return*/];
            }
        });
    });
});
