'use client'

import {User} from "@/types";
import {useParams, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {getNotes, setMyNotes} from "@/actions";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

const Notes = () => {

    const searchParams = useSearchParams()
    const theme = searchParams.get('theme')
    const [notes, setNotes] = useState('')

    const submitHandler = async () => {
        await setMyNotes(theme as string, notes)
    }


    useEffect(() => {
        const getMyNotes = async () => {
            const result = await getNotes(theme as string)
            setNotes(result)
        }
        getMyNotes()

    }, [])


    return (
        <>            
        <textarea spellCheck="false" className="mt-5 h-[150px] w-full p-4 border mb-5" value={notes}
                  onChange={(e) => setNotes(e.target.value)}>            
            {
                notes
            }
        </textarea>

            <button onClick={submitHandler} className="active:shadow-md p-3 border border-amber-300 rounded-md bg-amber-50">Отправить
            </button>
        </>
    );
};

export default Notes;