import './CV.css';

const competences = [
    {langage: 'Java', experience: '15'},
    {langage: 'JavaScript', experience: '10'},
    {langage: 'Angular', experience: '4'},
    {langage: 'PHP', experience: '4'},
    {langage: 'Solidity', experience: '1'}
]

export default function ListerCompetences() {
    const tableContainer = competences.map(competence =>
        <tr>
            <td>
                {competence.langage}
            </td>
            <td>
                {competence.experience > 1 ? competence.experience + ' ans' : competence.experience + ' an'}
            </td>
        </tr>
    );

    return (
        <table>
            <caption>compétences en programmation informatique</caption>
            <tr>
                <th scope='col'>Langage</th>
                <th scope='col'>Expérience</th>
            </tr>
            {tableContainer}
        </table>
    );
}