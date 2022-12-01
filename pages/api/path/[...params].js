import root from '../../../pathsData/paths';

export default function handler(req, res) {
    const params = req.query.params;

    if(root.type !== "dir")
        if(params.length > 1)
            res.status(500).json({ message: "Invaild Path" })
        else
            res.status(200).json({ type: "file" })     
    else
    {
        let recurseObject = root
        for(let i = 1; i < params.length; i++)
        {   
            if(recurseObject.type === "dir")
            {
                if(!(Object.keys(recurseObject.children).includes(params[i])))
                    res.status(500).json({ message: "Invaild Path" })
                else
                {
                    recurseObject = recurseObject.children[params[i]]
                }
            }
            else
            {
                res.status(200).json(recurseObject)
            }
            
        }
        var result = {...recurseObject}
        if(result.type === "dir")
        {
            result.children = {}
            Object.keys(recurseObject.children).forEach((directChild) => {
                result.children[directChild] = { type: recurseObject.children[directChild].type }
            })
        }
        res.status(200).json(result)
    }
}
  