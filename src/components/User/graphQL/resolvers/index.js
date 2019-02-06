const { UserTC } = require('../typeComposers');

// Queries
UserTC.addResolver(require('./isAuthenticated'));

// Mutations
UserTC.addResolver(require('./loginWithEmail'));
UserTC.addResolver(require('./loginWithEmailNoPassport'));
UserTC.addResolver(require('./loginWithGoogle'));
UserTC.addResolver(require('./createAccount'));
UserTC.addResolver(require('./verifyAccount'));
UserTC.addResolver(require('./resetPassword'));
UserTC.addResolver(require('./sendVerificationEmail'));
UserTC.addResolver(require('./sendPasswordResetLinkEmail'));
UserTC.addResolver(require('./changePassword'));
