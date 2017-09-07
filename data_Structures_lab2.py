sunLocation=(250,250)
sunRadius=50
yellow=(255,255,0)

earthRadius=30
blue=(0,0,255)
earthOrbitalRadius=170
earthSpeed=0.5

marsRadius=20
red=(255,0,0)
marsOrbitalRadius=80
marsSpeed=1

moonRadius=10
white=(255,255,255)
moonOrbitalRadius=45
moonSpeed=2.3

class Sun:
    def __init__(self,sunLocation,sunRadius,sunColor):
        self.sunLoc = sunLocation
        self.sunRad = sunRadius
        self.sColor = sunColor
    def draw(self,t):
        def drawCelestialBody(self.sunLoc,self.sunRad,self.sColor): 
    def _getLocation(self,t):
        self.time = t
        self.speed = 0
        centerX=orbitAroundLocation[0]+orbitRadius*sin(speed*time)
        centerY=orbitAroundLocation[1]+orbitRadius*cos(speed*time)
        return (centerX,centerY)
        
class Planet(Sun):
    def __init__(self,name,planetRad,planetOrbRad,planetColor,planetSpeed):
        self.planetName = name
        self.radius = planetRad
        self.pOrbRad = planetOrbRad
        self.pColor = planetColor
        self.pSpeed = planetSpeed
    def _getLocation(self,t):
        self.time = t
        self.speed = self.pSpeed
        centerX=orbitAroundLocation[0]+orbitRadius*sin(speed*time)
        centerY=orbitAroundLocation[1]+orbitRadius*cos(speed*time)
        return (centerX,centerY)
    def addPlanet(self,pRad,pOR,newPColor,newPSpeed):
        newP = Planet(self)
        self.planets = []
        for p in self.planets:
                         
def setup():
    size(500,500)
    global sun
    global t
    t=0
    sun=Sun(sunLocation,sunRadius,yellow)
    earth=sun.addPlanet(earthRadius,earthOrbitalRadius,blue,earthSpeed)
    sun.addPlanet(marsRadius,marsOrbitalRadius,red,marsSpeed)
    earth.addPlanet(moonRadius,marsOrbitalRadius,white,moonSpeed)
def draw():
    global t
    t+=0.02
    background(0)
    sun.draw(t)