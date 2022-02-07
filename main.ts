basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    }
})
