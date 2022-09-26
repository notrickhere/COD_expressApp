const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Rifle = require('./models/rifles')
const Pistol = require('./models/pistols')
const methodOverride = require('method-override')
require('dotenv').config()// ---> Link our ENV variables to our app
// ------------------------------------MIDDLE WARE
app.set('view engine', 'jsx')// ------> Creates Link to JSX
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({extended:false}))//parse req.body
app.use(methodOverride('_method'))
app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('once', () => {
    console.log('connected to mongo')
})
// ------------------------------------ROUTES[index]
app.get('/pistols', (req, res)=>{
    Pistol.find({}, (err, allPistols) =>{
        console.log(err)

        res.render('IndexP', {
            pistols: allPistols
        })
    })
})

app.get('/rifles', (req, res)=>{
    Rifle.find({}, (err, allRifles) =>{
        console.log(err)

        res.render('IndexA', {
            rifles: allRifles
        })
    })
})

// ------------------------------------ROUTES[new]
app.get('/pistols/new', (req,res) =>{
    res.render('NewP', {})
})
app.get('/rifles/new', (req,res) =>{
    res.render('NewA', {})
})

// ------------------------------------ROUTES[post]
app.post('/pistols', (req,res)=>{
    if (req.body.isPistolBroken === 'on'){
        req.body.isPistolBroken = true
    } else {
        req.body.isPistolBroken = false
    }

    Pistol.create(req.body, (err, createdPistol) => {
        console.log(err)
        console.log('Just Added : ', createdPistol)
    })
    res.redirect('/pistols')
})
app.post('/rifles', (req,res)=>{
    if (req.body.isRifleBroken === 'on'){
        req.body.isRifleBroken = true
    } else {
        req.body.isRifleBroken = false
    }

    Rifle.create(req.body, (err, createdRifle) => {
        console.log(err)
        console.log('Just Added : ', createdRifle)
    })
    res.redirect('/rifles')
})

// ------------------------------------ROUTES[edit]
app.get("/pistols/:id/edit", (req, res) => {
    Pistol.findById(req.params.id, (err, foundPistol) => {
        //findPistol
        console.log(err)
        if (!err) {
            res.render("EditP", {
                pistol: foundPistol,
                //pass in the foundPistol so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
app.get("/rifles/:id/edit", (req, res) => {
    Rifle.findById(req.params.id, (err, foundRifle) => {
        //findRifle
        console.log(err)
        if (!err) {
            res.render("EditA", {
                rifle: foundRifle,
                //pass in the foundRifle so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});

// ------------------------------------ROUTES[Update | Put and Patch]
app.put("/pistols/:id", (req, res) => {
    if (req.body.isPistolBroken === "on") {
        req.body.isPistolBroken = true;
    } else {
        req.body.isPistolBroken = false;
    }
    Pistol.findByIdAndUpdate(req.params.id, req.body, (err, updatedPistol) => {
        console.log(err)
        console.log(updatedPistol);
        res.redirect(`/pistols/${req.params.id}`);
    });
});
app.put("/rifles/:id", (req, res) => {
    if (req.body.isRifleBroken === "on") {
        req.body.isRifleBroken = true;
    } else {
        req.body.isRifleBroken = false;
    }
    Rifle.findByIdAndUpdate(req.params.id, req.body, (err, updatedRifle) => {
        console.log(err)
        console.log(updatedRifle);
        res.redirect(`/rifles/${req.params.id}`);
    });
});

// ------------------------------------ROUTES[delete]
app.delete("/pistols/:id", (req, res) => {
    Pistol.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/pistols");
    });
});
app.delete("/rifles/:id", (req, res) => {
    Rifle.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/rifles");
    });
});


// ------------------------------------ROUTES[seeds]
app.get('/pistols/seed', (req, res) => {
    Pistol.create([
        {
            manufacturer: 'Glock',
            model: 'Glock G17',
            isGunBroken: false
         },
         {
            manufacturer: 'Sig Sauer',
            model: 'P365 XL',
            isGunBroken: false
         },
         {
            manufacturer: 'Smith And Wesson',
            model: 'S&W M&P Shield M2.0',
            isGunBroken: false
         }
    ], (err, data) => {
        res.redirect('/pistols')
    })
})

app.get('/rifles/seed', (req, res) => {
    Rifle.create([
        {
            manufacturer: 'Ruger',
            model: 'AR-556',
            isGunBroken: false
         },
         {
            manufacturer: 'Bravo Company',
            model: 'Mod 2',
            isGunBroken: false
         },
         {
            manufacturer: 'American Tactical Imports',
            model: 'Ar-15',
            isGunBroken: false
         }
    ], (err, data) => {
        res.redirect('/rifles')
    })
})
// ------------------------------------ROUTES[show]
app.get('/pistols/:id', (req,res)=>{
    Pistol.findById(req.params.id, (err, foundPistol)=>{
        console.log(err)
        console.log('Found: ', foundPistol)
        res.render('ShowP', {
            pistol: foundPistol
        })
    })
})
app.get('/rifles/:id', (req,res)=>{
    Rifle.findById(req.params.id, (err, foundRifle)=>{
        console.log(err)
        console.log('Found: ', foundRifle)
        res.render('ShowA', {
            rifle: foundRifle
        })
    })
})

app.listen('3000', ()=>{
    console.log('The app is listening!')
})