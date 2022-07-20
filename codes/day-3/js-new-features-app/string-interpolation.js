function render() {
    var obj = {
        name: 'joydip',
        salary: 1000
    }
    var design = `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${obj.name}</td>
                <td>${obj.salary}</td>
            </tr>
        </tbody>
    </table>`
    document.body.innerHTML = design
}

/*
@Component({
    template: `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Joydip</td>
                <td>1000</td>
            </tr>
        </tbody>
    </table>`
})
class SampleComponent{

}
*/