class Draw {
    constructor() {
        this.options = ['red', 'blue', 'green'];
        let _result = this.drawResult();
        this.getDrawResult = () =>
        {
            return _result;
        }
    }
    
    drawResult() {
        let colors = [];
        for (let i=0; i < this.options.length; i++)
        {
            let index = Math.floor(Math.random() * this.options.length)
            const color = this.options[index]
            colors.push(color)
        }
        return colors;
    }
}