class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.boy = loadImage('sprites/boy.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.boy.bodyA = body;
    }
    
    fly(){
        this.boy.bodyA = null;
    }

    display(){
        image(this.boy,200,20);
        if(this.boy.bodyA){
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;

        }
    }
    
}