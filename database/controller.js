const conn = require('../database/connection')
/*
Function to call SP GetAdditionalAccountMovement
*/
const GetAdditionalAccountMovement = async(req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inIdSubAccountState', req.body.inIdSubAccountState)
        .input('inIdAccountState', req.body.inIdAccountState)
        .input('inPostUser', req.body.inPostUser)
        .input('inPostIp', req.body.inPostIp)
        .output('outResultCode', 0)
        .execute('GetAdditionalAccountMovement')
    res.json(result.recordset)
}
/*
Function to call SP GetMasterAccountMovements
*/
const GetMasterAccountMovements = async(req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inIdAccountState', req.body.inIdAccountState)
        .input('inPostUser', req.body.inPostUser)
        .input('inPostIp', req.body.inPostIp)
        .output('outResultCode', 0)
        .execute('GetMasterAccountMovements')
    res.json(result.recordset)
}
/*
Function to call SP GetSubAccountStatements
*/
const GetSubAccountStatements = async(req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inPhysicalCardCode', req.body.inPhysicalCardCode)
        .input('inPostUser', req.body.inPostUser)
        .input('inPostIp', req.body.inPostIp)
        .output('outResultCode', 0)
        .execute('GetSubAccountStatements')
    res.json(result.recordset)
}
/*
Function to call SP ShowMasterAccountStatement
*/
const ShowMasterAccountStatement = async(req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inTFCode', req.body.inTFCode)
        .input('inPostUser', req.body.inPostUser)
        .input('inPostIp', req.body.inPostIp)
        .output('outResultCode', 0)
        .execute('ShowMasterAccountStatement')
    res.json(result.recordset)
}
/*
Function to call SP ShowPhysicalCard
*/
const ShowPhysicalCard = async(req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inUserName', req.body.inUserName)
        .input('inPostUser', req.body.inPostUser)
        .input('inPostIp', req.body.inPostIp)
        .output('outResultCode', 0)
        .execute('ShowPhysicalCard')
    res.json(result.recordset)
}
/*
Function to call SP Login
*/
const login = async(req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inUser', req.body.inUser)
        .input('inPassword', req.body.inPassword)
        .input('inPostUser', req.body.inPostUser)
        .input('inPostIp', req.body.inPostIp)
        .output('outLoginSuccess', 0)             
        .output('outResultCode', 0)
        .execute('Login');
        if (result.output.outResultCode == 0 && result.output.outLoginSuccess == 0){
            res.json({
                access: "Login Exitoso",
                message: "Inicio de sesión exitoso"
            })
        } else {
            res.json({
                access: "Login Fallido",
                message: "Usuario o contraseña incorrectos"
            })
        }
};

exports.GetAdditionalAccountMovement = GetAdditionalAccountMovement;
exports.GetMasterAccountMovements = GetMasterAccountMovements;
exports.GetSubAccountStatements = GetSubAccountStatements;
exports.ShowMasterAccountStatement = ShowMasterAccountStatement;
exports.ShowPhysicalCard = ShowPhysicalCard;
exports.login = login;