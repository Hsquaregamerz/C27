class Chain {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);

    }

    display(){
        var BA = this.chain.bodyA.position;
        var BB = this.chain.bodyB.position;
        strokeWeight(5);
        line(BA.x,BA.y,BB.x,BB.y)        
    }
}