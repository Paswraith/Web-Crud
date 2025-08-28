import * as clientService from "../services/clientServices.js";

export const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    } catch (err) {
        console.error("Error fetching Client" , err);
        res.status(500).json({ message: 'Internal Server'})
    }
};

export const createClient = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        const clientData = req.body;
        const newClient = await clientService.createClient(clientData);
        res.status(200).json(newClient);
    } catch (err) {
        console.error("Error adding client" , err);
        res.status(500).json({ message: 'Internal Server'})
    }
};

export const updateClient = async (req, res) => {
    try {
        const clientId =req.params.id;
        const clientData = req.body;
        const updatedClient= await clientService.updateClient(clientId, clientData);
        if (!updateClient) {
            return res.status(404).json({ message: "Client not found."})
        }
        res.status(200).json(updatedClient);
    } catch (err) {
        console.error("Error updating Client" , err);
        res.status(500).json({ message: 'Internal Server'})
    }
};

export const deleteClient = async (req, res) => {
    try {
        const clientId =req.params.id;
        const clientData = req.body;
        const deleted = await clientService.deleteClient(clientId);
        if(!deleted) {
            return res.status(404).json({ message: `Client not found.`})

        }
        res.status(200).json({ message: "Client deleted successfully." });
    } catch (err) {
        console.error("Error deleting Client" , err);
        res.status(500).json({ message: 'Internal Server'})
    }
};

export const searchClient = async(req, res) => {
  try {
    const searchTerm = req.query.q;
    const clients = await clientService.searchClient(searchTerm);
    res.status(200).json(clients);

  } catch (error){
    console.error('Error searching clients: ', error);
    res.status(500).json({ message: "Internal Service Error "});
  }
}