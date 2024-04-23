let Snelheid = 50
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Snelheid)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Snelheid)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Snelheid)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Snelheid)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Snelheid)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Snelheid)
    }
})
