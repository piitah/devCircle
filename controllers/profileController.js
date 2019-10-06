const { Profile } = require('../models/profile')

exports.postProfile = async (req, res) => {
    // Get fields
    const profileFields = {
    };
    profileFields.userId = req.user._id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.github) profileFields.github = req.body.github
    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    await Profile.findOne({ userId: req.user._id }).then(profile => {
        console.log(profile)
        if (profile) {
            // Update
            Profile.findOneAndUpdate(
                { userId: req.user._id },
                { $set: profileFields },
                { new: true }
            ).then(profile => res.json(profile));
        } else {
            // Save Profile
            new Profile(profileFields).save().then(profile => res.json(profile));
        }
    });
}

exports.getProfile = async (req, res) => {
    await Profile.find({})
        .populate('userId', ['firstname', 'lastname'])
        .then(profile => {
            if (profile) {
                res.status(200).send(profile)
            }
        })
        .catch(err => {
            res.status(404).send({
                message: "error" + err
            })
        })
}

exports.getProfileById = async (req, res) => {
    await Profile.findOne({ userId: req.params.id })
        .populate('userId', ['name'])
        .then(profile => {
            try {
                res.status(200).send(profile)
            } catch (error) {
                res.status(404).send("no profile " + error)
            }
        })
        .catch(err => {
            res.status(404).send("user does not have a profile" + err)
        })
}

exports.deleteProfile = async (req, res) => {
    await Profile.findByIdAndDelete({ userId: req.user._id })
        .then(() => {
            res.status(200).send("successfull")
        })
        .catch(err => {
            res.status(404).send("profile does not exist")
        })
}

exports.Experience = (req, res) => {
    Profile.findOne({ userId: req.params.id })
        .then(result => {
            const newExperience = {
                title: req.body.title,
                company: req.body.company,
                location: req.body.location,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            }
            result.experience.unshift(newExperience)
            result.save()
                .then((profile => {
                    res.status(200).send(profile)
                }))
        })
}

exports.Education = (req, res) => {
    Profile.findOne({ userId: req.params.id })
        .then(result => {
            const newEducation = {
                school: req.body.school,
                degree: req.body.degree,
                fieldofstudy: req.body.fieldofstudy,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            }
            result.education.unshift(newEducation)

            result.save()
                .then(edu => {
                    res.status(201).send(edu)
                })
        })
}

exports.deleteEducationById = async (req, res) => {
    await Profile.findOne({ userId: req.user._id })
        .then(profile => {
            let removeIndex = profile.education.map(item => {
                return item._id
            }).indexOf(req.params._id)
            // splice out the array
            profile.education.splice(removeIndex, 1)
            profile.save()
                .then((profile) => {
                    res.status(200).send(profile)
                })
                .catch(err => {
                    res.status(404).send("cant find education" + err)
                })
        })
}

exports.deleteExperienceById = async (req, res) => {
    await Profile.findOne({ userId: req.body._id })
        .then((profile => {
            let removeIndex = profile.experience.map(e => {
                return e._id
            }).indexOf(req.body._id)

            profile.experience.splice(removeIndex, 1)

            profile.save()
                .then(profile => {
                    res.status(200).send(profile)
                })
                .catch(err => {
                    res.status(404).send(err)
                })
        }))

}